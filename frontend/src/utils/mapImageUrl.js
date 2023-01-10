export const mapImageUrl = (arr) => {
    return arr.map((item) => {
        return {
            ...item,
            image: 'http://localhost:5000/products' + item.image
        };
    });
};