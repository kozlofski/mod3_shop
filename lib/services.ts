export const generateShippingDate = () => {
    const today = new Date();
    const minShippingDate = new Date(today);
    const maxShippingDate = new Date(today);

    const randomDaysFromNow = Math.random() * 7
    const randomRange = Math.random() * 5

    minShippingDate.setDate(today.getDate() + randomDaysFromNow);
    maxShippingDate.setDate(minShippingDate.getDate() + randomRange)
    
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short' };

    const formattedMinDate = minShippingDate.toLocaleDateString('en-GB', options).replace(',', '');
    const formattedMaxDate = maxShippingDate.toLocaleDateString('en-GB', options).replace(',', '');
    
    return `${formattedMinDate} - ${formattedMaxDate}`
}