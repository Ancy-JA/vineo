'use client';
import React, { useState, useEffect } from 'react';
import { useGetBoxHistoryAdminQuery, useGetBoxWinePrintCardMutation } from '@/app/redux/authApi';
import { Numbers } from '../../../../constants/numberconstants';
import { useTranslation } from 'react-i18next';
import BoxItem from '@/components/BoxItem';
import ModalView from '@/components/ModalView';
import SearchBar from '@/components/SearchBar';
import Pagination from '@/components/pagination';
import { Box, GetBoxWinePrintCardResponse } from '@/components/Types';

const HistoryPage: React.FC = () => {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(Numbers.page_size); 
  const [selectedBox, setSelectedBox] = useState<Box | null>(null);
  const { t } = useTranslation();

  // Fetch box history with debounced search term and dynamic pageSize
  const { data, refetch, isLoading, error } = useGetBoxHistoryAdminQuery({
    searchString: debouncedSearchTerm,
    page,
    pageSize,
  });
  const [getBoxWinePrintCard] = useGetBoxWinePrintCardMutation<GetBoxWinePrintCardResponse>();

  const onSearchChange = (debouncedTerm: string) => {
    setDebouncedSearchTerm(debouncedTerm);
    setPage(1);
  };

  // Refetch data when search term, page, or pageSize changes
  useEffect(() => {
    refetch();
  }, [debouncedSearchTerm, page, pageSize]);

  const handleDownload = async (boxId: string) => {
    try {
      const response = await getBoxWinePrintCard({ boxId: String(boxId) }).unwrap();
      const base64Data = response.data.getBoxWinePrintCard;
      const normalizedBase64 = base64Data.replace(/-/g, '+').replace(/_/g, '/');
      const binaryString = window.atob(normalizedBase64);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const blob = new Blob([bytes], { type: 'application/pdf' });
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = `box_${boxId}.pdf`;
      downloadLink.click();
      URL.revokeObjectURL(downloadLink.href);
    } catch (error) {
      console.error("Error fetching download data:", error);
    }
  };

  const handleView = (box: Box) => {
    setSelectedBox(box);
  };

  const closeModal = () => {
    setSelectedBox(null);
  };

  const fetchedBoxes: Box[] = data?.data?.getBoxHistoryAdmin?.boxes || [];
  const totalClients = data?.data?.getBoxHistoryAdmin?.total || 0;
  const totalPages = Math.ceil(totalClients / pageSize);

  const handlePageClick = (newPage: number) => {
    setPage(newPage);
  };

  const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = Number(event.target.value);
    setPageSize(newSize); // Update pageSize state
    setPage(1); // Reset to the first page
  };

  if (isLoading) return <div>{t('historyPage.loading')}</div>;
  if (error) return <div>{t('historyPage.error')}</div>;

  return (
    <div className="min-h-screen w-screen bg-gray-100">
      <div className="w-full min-h-screen bg-white rounded-lg shadow-md p-4">
        <div className="mb-3 border-b font-bold">{t('historyPage.title')}</div>

        {/* Search Bar */}
        <SearchBar
          onSearchChange={onSearchChange}
          placeholder={t('historyPage.searchPlaceholder')}
        />

        {/* Header Row */}
        <div className="hidden xl:grid grid-cols-[3fr_4fr_1fr_1fr_1fr_1fr_3fr] gap-2 items-center p-2 border-b text-left font-semibold bg-gray-200 flex-grow">
          <div>{t('historyPage.userDetails')}</div>
          <div>{t('historyPage.wineInBox')}</div>
          <div>{t('historyPage.creationDate')}</div>
          <div>{t('historyPage.deliveryDate')}</div>
          <div>{t('historyPage.boxType')}</div>
          <div>{t('historyPage.status')}</div>
          <div>{t('historyPage.actions')}</div>
        </div>

        {/* Box Items */}
        {fetchedBoxes.length > 0 ? (
          fetchedBoxes.map((box) => (
            <BoxItem
              key={box._id}
              box={box}
              handleDownload={() => handleDownload(box._id)}
              handleView={() => handleView(box)}
            />
          ))
        ) : (
          <div className="text-gray-500 text-center p-4">{t('historyPage.noData')}</div>
        )}

        {/* Modal View */}
        {selectedBox && (
          <ModalView selectedBox={selectedBox} closeModal={closeModal} />
        )}

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-700">{totalClients} {t('historyPage.clients')}</span>
          <Pagination
            page={page}
            totalPages={totalPages}
            pageSize={pageSize}
            handlePageClick={handlePageClick}
            handlePageSizeChange={handlePageSizeChange} // Pass handlePageSizeChange to Pagination
          />
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
