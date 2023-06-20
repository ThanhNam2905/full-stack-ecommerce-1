
export const getDiscountPricePercentage = (originalPrice, discountPrice) => {
    const discount = originalPrice - discountPrice;
    const discountPercentage = (discount/originalPrice) * 100;

    return discountPercentage.toFixed(2);  // 20.12(545558456)
}