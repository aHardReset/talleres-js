const coupons = {
  abril15: 15,
  noviembre20: 20,
  halloween: 40,
};

const calculateDiscountedPrice = (originalPrice, discount) => {
  const factor = 1 - convertToPercent(discount);
  const discountedPrice = originalPrice * factor;
  return discountedPrice;
};

const convertToPercent = (number) => number / 100;

const discountedPriceRequest = () => {
  const elementDiscountedPrice = document.getElementById("discountedPrice");
  const originalPrice = document.getElementById("originalPrice").value;
  if (originalPrice === "") {
    elementDiscountedPrice.innerText = "Ingresa el precio original";
    return -1;
  }
  let discount = document.getElementById("discount").value;
  const totalPrice = calculateDiscountedPrice(originalPrice, discount);

  elementDiscountedPrice.innerText =
    "El precio con descuento es: " + totalPrice;
  return totalPrice;
};

const discountedPriceWithCoupon = () => {
  const coupon = document.getElementById("coupon").value;
  const discount = coupons[coupon];
  const elementDiscountedPrice = document.getElementById("discountedPrice");
  if (discount === undefined) {
    elementDiscountedPrice.innerText = "No es un cupon valido";
    return -1;
  }
  const originalPrice = document.getElementById("originalPrice").value;
  if (originalPrice === "") {
    elementDiscountedPrice.innerText = "Ingresa el precio original";
    return -1;
  }
  const totalPrice = calculateDiscountedPrice(originalPrice, discount);
  elementDiscountedPrice.innerText =
    "El precio con descuento es: " + totalPrice;
  return totalPrice;
};
