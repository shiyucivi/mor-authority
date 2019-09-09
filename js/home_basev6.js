$(document).ready(function() {
  var s_content = "";
  var p_content = "";
  var z_content = "";
  var isTop = false;
  var core_technologyList = [
    "语义理解",
    "对话系统",
    "学习系统",
    "自动服务对接",
    "语言生成",
    "远场降噪",
    "唤醒+离线命令词",
    "语音识别",
    "语音合成",
    "声纹识别"
  ];
  var productLineList = ["MorAuto", "MorTV", "MorSpeaker"];
  var h = $(".turn-waper").height();
  //页面初始化
  init_inner();

  function init_inner() {
    // 核心技术
    var technologyArr = [
      "NLU",
      "dialogue_system",
      "learning_system",
      "automatic_services_connection",
      "language_generation",
      "ASR",
      "voiceprint_recognition",
      "wakeup_command_word",
      "far-field_noise_reduction",
      "TTS"
    ];
    for (var i = 0; i < 10; i++) {
      var t_content =
        ` <a href = ".\/technology.html?id=` +
        technologyArr[i] +
        `" ><div class="core_technology_item">
                                   
                                    <div class="core_technology_item_pic">
                                        <img class="lazy" src="./assets/grey.gif" data-original="./assets/images/ic\_morweb\_home\_icon` +
        (i + 1) +
        `.png" alt="icon">
                                    </div>
                                   
                                    <p>` +
        core_technologyList[i] +
        `</p>
                                </div> </a>`;
      s_content = s_content + t_content;
    }
    $(".core_technology").append(s_content);
    // 产品
    // for (var i = 0; i < 3; i++) {
    //   var t_content =
    //     `<div class="products_methods_item" ss="` +
    //     i +
    //     `">
    //                                 <div class="products_methods_item_pic">
    //                                     <img  class="lazy" src="./assets/grey.gif" data-original="./assets/images/img\_morweb\_home\_products\_` +
    //     (i + 1) +
    //     `.png" alt="icon">
    //                                 </div>
    //                                 <p>` +
    //     productLineList[i] +
    //     `</p>
    //                             </div>`
    //   p_content = p_content + t_content
    // }

    // $('.products_methods').append(p_content)
    // $('.products_methods_item').on('click', function() {
    //   var item = Number($(this).attr('ss'))
    //   switch (item) {
    //     case 0:
    //       window.location.href = './product_car.html'
    //       break
    //     case 1:
    //       window.location.href = './product_tv.html'
    //       break
    //     case 2:
    //       window.location.href = './product_speaker.html'
    //       break
    //   }
    // })
    //合作
    for (var i = 0; i < 39; i++) {
      var t_content =
        `<div class="wearefriend_item">
                                <img class="lazy" src="./assets/grey.gif" data-original="./assets/icon/logo\_morweb\_home\_partners\_` +
        (i + 1) +
        `.png" alt="">
                            </div>`;
      z_content = z_content + t_content;
    }
    for (var i = 0; i < 4; i++) {
      var t_content =
        `<div class="wearefriend_item" style="opacity:0">
                                <img src="#` +
        (i + 1) +
        `.png" alt="">
                            </div>`;
      z_content = z_content + t_content;
    }
    $(".wearefriend_main").append(z_content);
  }

  // banner点击下拉
  $(".lb-news-mouse").on("click", function() {
    $(document).scrollTop(71);
  });
  // bannermouse
  function junp_mouse(eveTime, time_out) {
    clearInterval(timer);
    var timer = setInterval(showOrHide, eveTime);

    function showOrHide() {
      $(".lb-news-mouse").addClass("animated bounce");
      setTimeout(function() {
        $(".lb-news-mouse").removeClass("animated bounce");
      }, time_out);
    }
  }
  junp_mouse(2000, 1000);

  function realeFunc(e) {
    //滚动条高度+视窗高度 = 可见区域底部高度
    var visibleBottom = window.scrollY + document.documentElement.clientHeight;
    //可见区域顶部高度
    var visibleTop = window.scrollY;
    // var centerY = obj.offsetTop + (obj.offsetHeight / 2);
    // var joinXMain=document.documentElement.clientHeight/2;
    var joinXMin = document.documentElement.clientHeight / 3;
    var joinY = document.documentElement.clientHeight - joinXMin;
    // if (centerY > visibleTop && centerY < visibleBottom) {
    //     obj.setAttribute('style', 'animation:aDirection 1.5s forwards');

    // }
    //  if(visibleTop>document.documentElement.clientHeight/2-50){
    //      $('.header_main').attr('style', 'top:0;background:#ffff;z-index:12;width:100%;box-shadow: 0px 0px 10px #3D193D;')
    //  }else{
    //      $('.header_main').attr('style', '')
    //  }
    if (visibleTop > 70) {
      isTop = true;
      $(".turn-waper").attr("style", "position:absolute");
      $(".turn-waper").addClass("swiper-no-swiping");
      $(".lb-logo").animate(
        {
          marginTop: "-90px"
        },
        500,
        function() {
          // Animation complete.
        }
      );
      $(".lb-logo1").animate(
        {
          marginTop: "-70px"
        },
        500,
        function() {
          // Animation complete.
        }
      );
      $(".main-content").animate(
        {
          top: joinY + "px"
        },
        500,
        function() {
          // Animation complete.
          $(".pagination").hide();
          $(".bannerBox").hide();
        }
      );
    }
    if (visibleTop < 70 && isTop) {
      $(".main-content").animate(
        {
          top: document.documentElement.clientHeight + "px"
        },
        300,
        function() {
          // Animation complete.
          $(".pagination").show();
          $(".bannerBox").show();
          $(".turn-waper").removeClass("swiper-no-swiping");
        }
      );
    }
  }
  // window.addEventListener("scroll", debounce(realeFunc, 100), false);
  //  window.addEventListener('scroll', throttle(realeFunc, 50, 100))
  // timeline init
  var bigEvent = [
    {
      year: 2016,
      events: [
        {
          mouths: 1,
          times: "2016.05",
          even: "公司成立"
        },
        {
          mouths: 2,
          times: "2016.05",
          even: "天使轮融资：200万美金（经纬中国、襄禾)"
        },
        {
          mouths: 3,
          times: "2016.09",
          even: "阿里巴巴诸神之战全国创客大赛北京赛区第一名"
        }
      ]
    },
    {
      year: 2017,
      events: [
        {
          mouths: 1,
          times: "2017.01",
          even: "A轮融资：1000万美金（经纬中国、源码、襄禾）"
        },
        {
          mouths: 2,
          times: "2017.07",
          even: "荣登【2017人工智能创新公司50强】名单"
        },
        {
          mouths: 3,
          times: "2017.12",
          even: " Startup Autobahn 【最佳团队奖】"
        },
        {
          mouths: 4,
          times: "2017.12",
          even: " 创业黑马 TOP100"
        },
        {
          mouths: 5,
          times: "2017.12",
          even: "蓦然认知“万物赋声”全球发布会"
        },
        {
          mouths: 6,
          times: "2018.05",
          even: "创业邦-人工智能创业50强"
        },
        {
          mouths: 7,
          times: "2018.06",
          even: "在【2018宝马开放创新活动】中成为C互联化领域的获胜公司"
        },
        {
          mouths: 9,
          times: "2018.06",
          even: "A+轮融资：1000万美元"
        },
        {
          mouths: 10,
          times: "2018.10",
          even: "获国家高新技术企业证书"
        },
        {
          mouths: 11,
          times: "2018.11",
          even: "获36氪【2018年新经济之王“人工智能语音奖”】"
        },
        {
          mouths: 12,
          times: "2018.11",
          even: "入选高工智能【中国智能网联汽车产业2018年度TOP100榜单】"
        }
      ]
    },
    {
      year: 2018,
      events: [
        {
          mouths: 2,

          times: "2018.12",
          even: "获雷锋“2018AI最佳掘金案例”榜单【最佳车载语音交互奖】"
        },
        {
          mouths: 3,
          times: "2018.12",
          even: "荣获国际汽车城颁发的“未来之星”奖"
        },
        {
          mouths: 4,
          times: "2018.12",
          even: "获得“GUI+VUI”融合交互专利授权"
        },
        {
          mouths: 5,

          times: "2019.07",
          even: "入选36氪【2019新商业开创者100榜】"
        },
        {
          mouths: 7,
          times: "2019.07",
          even: "获得雷锋网【AI+汽车最佳未来成长奖】"
        }
      ]
    }
  ];
  $(".event_wrap").eventFlow({
    events: bigEvent
  });

  $(".float_main")
    .eq(0)
    .hover(
      function() {
        $(".solution_main")
          .eq(0)
          .children(".orange_line")
          .animate(
            {
              width: "220px"
            },
            "slow"
          );
      },
      function() {
        $(".solution_main")
          .eq(0)
          .children(".orange_line")
          .animate(
            {
              width: "30px"
            },
            "slow"
          );
      }
    );
  $(".float_main")
    .eq(1)
    .hover(
      function() {
        $(".solution_main")
          .eq(1)
          .children(".orange_line")
          .animate(
            {
              width: "220px"
            },
            "slow"
          );
      },
      function() {
        $(".solution_main")
          .eq(1)
          .children(".orange_line")
          .animate(
            {
              width: "30px"
            },
            "slow"
          );
      }
    );
  $(".float_main")
    .eq(0)
    .click(function() {
      location.href = "./morAuto.html";
    });
  $(".float_main")
    .eq(1)
    .click(function() {
      location.href = "./morIot.html";
    });
});
