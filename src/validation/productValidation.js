import validator from "validator";

function productValidation(data, t) {
    const errors = {};
    if (validator.isEmpty(data.productVariantName.trim()))
        errors.productVariantName ="Please enter product variant."
    if (validator.isEmpty(data.name.trim()))
        errors.name = "Please enter product name."
    if (validator.isEmpty(data.qty.trim()))
        errors.qty = "Please enter the quantity."
    if (validator.isEmpty(data.price.trim()))
        errors.price = "Please enter the price."
    if (validator.isEmpty(data.color))
        errors.color = "Please enter the color name."
    return { errors, isValid: Object.keys(errors).length <= 0 };
}

export default productValidation;