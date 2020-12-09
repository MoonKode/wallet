const formatCurrency = (current: number):string => {
    return current.toLocaleString(
        'pt-pt',
        {
            style: "currency",
            currency: "EUR"
        }
    )
}

export default formatCurrency