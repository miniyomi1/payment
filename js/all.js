let paymentType = 'credit';

function changePaymentInfo(){
    $('.payment-btn').removeClass('active');
    $(this).addClass('active');
    $(this).hasClass('cridit-btn') ? (
        $('.payment-info-panel').removeClass('active'), $(".credit-card").addClass('active')) :
        ($(this).hasClass('market-btn') ? (
            $('.payment-info-panel').removeClass('active'), $(".convenience-store").addClass('active')) :
            ($(this).hasClass('atm-btn') ? (
                $(".payment-info-panel").removeClass('active'), $('.atm').addClass('active')) :(alert('錯誤'))));
}

function paymentSubmit(a) {
    $(".payment-info>.active>form").submit()
}

$(document).ready(function () {
    $('.payment-btn').on('click', changePaymentInfo);
    // $('input').on('keyup',checkEmail);
    $('.submit-btn').on('click',paymentSubmit);
});

window.Parsley.addValidator("dkPhone", {
    requirementType: "integer",
    validateNumber: function (value) {
        return value.toString().length === 8;
    },
    messages: {
        en: "This value should be valid Danish phone number"
    }
});