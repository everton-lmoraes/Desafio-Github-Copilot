function getCardType(number) {
    // Remover espaços em branco do número do cartão
    const sanitizedNumber = number.replace(/\s+/g, '');

    const cardPatterns = {
        'MasterCard': /^5[1-5][0-9]{14}$/,
        'Visa': /^4[0-9]{12}(?:[0-9]{3})?$/,
        'American Express': /^3[47][0-9]{13}$/,
        'Diners Club': /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        'Discover': /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        'EnRoute': /^(2014|2149)[0-9]{11}$/,
        'JCB': /^(?:2131|1800|35\d{3})\d{11}$/,
        'Voyager': /^8699[0-9]{11}$/,
        'HyperCard': /^(606282|3841)[0-9]{10,17}$/,
        'Aura': /^50[0-9]{14,17}$/
    };

    for (const [cardType, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(sanitizedNumber)) {
            return cardType;
        }
    }
    return 'Unknown';
}

// Exemplo de uso
const cardNumber = '4716 5383 3282 3257'; // Substitua pelo número do cartão a ser validado
const cardType = getCardType(cardNumber);
console.log(`O tipo do cartão é: ${cardType}`);