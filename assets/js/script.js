/* Piracy Detection */
$("#btn-piracy-detection").click(function() {
    let imageUrl = "/Apple-CMS/assets/images/piracy/popup_ic_Detection.svg";
    $('.piracy-modal-img').css('background-image', 'url(' + imageUrl + ')');
    $('.modal-subtitle').css({'color': '#05031A'});
    $('.modal-subtitle').html("正在检测请勿关闭窗口…");
    $('#progModal1').modal('show');
    
    // simulate starting
    setTimeout(function() {
        $('.modal-subtitle').html("开始加载特征文件…");
    }, 2000);

    // simulate finishing
    setTimeout(function() {
        $('.modal-subtitle').html("特征文件加载完毕，请稍后…");
    }, 4000);

    // simulate loss
    setTimeout(function() {
        let imageUrl = "/Apple-CMS/assets/images/piracy/popup_ic_Detection_Lose.svg";
        $('.piracy-modal-img').css('background-image', 'url(' + imageUrl + ')');
        $('.modal-subtitle').css({'color': '#F22F43'});
        $('.modal-subtitle').html("未检测到苹果CMS");
    }, 6000);


});