'use client';
import React, { useState, useEffect } from 'react';
import { useGetBoxWinePrintCardMutation } from '@/app/redux/authApi';
import { Numbers } from '../../../../constants/numberconstants';
import { useTranslation } from 'react-i18next';
import BoxItem from '@/components/History/BoxItem';
import ModalView from '@/components/History/ModalView';
import SearchBar from '@/components/History/SearchBar';
import Pagination from '@/components/History/pagination';
import HistoryHeader from '@/components/History/HistoryHeader'
import { Box, GetBoxWinePrintCardResponse } from '@/components/Types';
import { downloadPdf } from '@/utils/downloadUtils';
import useLenisScroll from '@/utils/useLenisScroll';
import { useFetchBoxHistory } from '@/components/Hooks/useFetchBoxHistory';

const HistoryPage: React.FC = () => {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(Numbers.page_size);
  const [selectedBox, setSelectedBox] = useState<Box | null>(null);
  const { t } = useTranslation();
  const scrollRef = useLenisScroll();

  // Fetch box history using custom hook
  const {
    fetchedBoxes,
    totalClients,
    totalPages,
    refetch,
    isLoading,
    error,
  } = useFetchBoxHistory(debouncedSearchTerm, page, pageSize);

  const [getBoxWinePrintCard] = useGetBoxWinePrintCardMutation<GetBoxWinePrintCardResponse>();

  const onSearchChange = (debouncedTerm: string) => {
    setDebouncedSearchTerm(debouncedTerm);
    setPage(1); // Reset to first page on new search
  };

  // Refetch data when search term, page, or pageSize changes
  useEffect(() => {
    if (debouncedSearchTerm) {
      refetch();
    }
  }, [debouncedSearchTerm, page, pageSize]);

  const handleDownload = async (boxId: string) => {
    try {
      const response = (await getBoxWinePrintCard({ boxId: String(boxId) }).unwrap()) as GetBoxWinePrintCardResponse;
      const pdfData = response.data.getBoxWinePrintCard;
      downloadPdf(pdfData, `box_${boxId}`);
    } catch (error) {
      console.error('Download error:', error);
    }
  };
  
  
  const handleView = (box: Box) => {
    setSelectedBox(box);
  };

  const closeModal = () => {
    setSelectedBox(null);
  };

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
    <div ref={scrollRef} className="min-h-screen w-screen bg-gray-100">
      <div className="w-full min-h-screen bg-white rounded-lg shadow-md p-4">
        <div className="mb-3 border-b font-bold">{t('historyPage.title')}</div>

        {/* Search Bar */}
        <SearchBar
          onSearchChange={onSearchChange}
          placeholder={t('historyPage.searchPlaceholder')}
        />

        {/* Header Row */}
        <HistoryHeader />

        {/* Box Items */}
        {fetchedBoxes.length > 0 ? (
          fetchedBoxes.map((box: Box) => (
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
        {selectedBox && <ModalView selectedBox={selectedBox} closeModal={closeModal} />}

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-700">
            {totalClients} {t('historyPage.clients')}
          </span>
          <Pagination
            page={page}
            totalPages={totalPages}
            pageSize={pageSize}
            handlePageClick={handlePageClick}
            handlePageSizeChange={handlePageSizeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
