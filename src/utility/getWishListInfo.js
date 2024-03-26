export const  getWishListInfo = () => {
        const saveData = JSON.parse(localStorage.getItem('wishlist')) || [];
        return saveData;
}