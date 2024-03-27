import { getReadInfo } from "../utility/getReadInfo";

const useReadSortData = () => {
    const ReadData = getReadInfo();
    const id = ReadData.sort((a,b)=>a.id-b.id)
    const ratingSort = ReadData.sort((a,b)=>{parseInt(a.rating)-parseInt(b.rating)})
    const pagesSort =ReadData.sort((a,b) => a.totalPages - b.totalPages)
    const yearSort = ReadData.sort((a,b) => a.yearOfPublishing - b.yearOfPublishing)
    return {id,ratingSort,pagesSort,yearSort};
};

export default useReadSortData;