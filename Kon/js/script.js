// ハンバーガーメニュー
jQuery(function ($) {
    $('.js-hamburger').on('click', function () {
        if ($(this).hasClass('open')) {
            //ドロワーメニューが開いているときの処理
            $('.js-drawer').fadeOut();
            $(this).removeClass('open');
            //ドロワーメニューが開いているときはスクロールできない
            $('html').removeClass('fixed');
        } else {
            //ドロワーメニューが閉じているの処理
            $('.js-drawer').fadeIn();
            $(this).addClass('open');
            //ドロワーメニューが閉じているときはスクロールできる
            $('html').addClass('fixed');
        }
        });
    });

// お品書きセクションスライダー
$(function(){
    $('.slider').slick({
      autoplay: true, // 自動でスクロール
      autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
      speed: 5000, // スライドが流れる速度を設定
      cssEase: "linear", // スライドの流れ方を等速に設定
      slidesToShow: 4, // 表示するスライドの数
      swipe: false, // 操作による切り替えはさせない
      arrows: false, // 矢印非表示
      pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
      pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
        responsive: [
        {
        breakpoint: 750,
        settings: {
            slidesToShow: 3, // 画面幅750px以下でスライド3枚表示
        }
        }
    ]
    });
});

// お知らせセクションアコーディオンメニュー
jQuery(function ($) {

    $('.js-accordion-title').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
    /*矢印の向きを変更*/
    $(this).toggleClass('open');
    });
    
});