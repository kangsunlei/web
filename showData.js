/**
 * Created by Perfect on 2017/4/5.
 */
$(function () {
    $.get('data.json', function (data) {
        if (data.experience) {
            var color = ['info', 'danger', 'success', 'primary'];
            var yearList = '';
            var infoList = '';
            data.experience.forEach(function (item, i) {
                yearList += '<li>' + item.year + '</li>';
                infoList += '<li>'
                    + '<div class="timeline-badge ' + color[i % 3] + '"><i class="glyphicon glyphicon-briefcase"></i></div>'
                    + '<div class="timeline-panel">'
                    + '<div class="timeline-heading">'
                    + '<h4 class="timeline-title">' + item.info.head + '</h4>'
                    + '</div>'
                    + '<div class="timeline-body">'
                    + '<p>' + item.info.body + '</p>'
                    + '</div>'
                    + '</div>'
                    + '</li>';
            });
            $("#work").find('.year').prepend(yearList);
            $("#work").find('.timeline').html(infoList);
        }

        if (data.works) {
            //tab 按钮
            var workClassList = '';
            //tab区块
            var tabList = '';

            workClassList = '<li class="resp-tab-item" aria-controls="tab_item-0" role="tab"><span>ALL</span></li>';
            tabList += '<div class="tab-1 resp-tab-content" aria-labelledby="tab_item-0"></div>'

            data.works.forEach(function (item, i) {
                workClassList += '<li class="resp-tab-item" aria-controls="tab_item-' + (i + 1) + '" role="tab"><span>' + item.name + '</span></li>'

                tabList += '<div class="tab-1 resp-tab-content" aria-labelledby="tab_item-' + (i + 1) + '"></div>'
            });
            $("#port").find(".resp-tabs-list").html(workClassList);
            $("#port").find(".resp-tabs-container").html(tabList);

            //ALL区块内的内容
            var listAll = '';
            //对应的模态框内容
            var modalHtml = '';
            var n = 0;
            data.works.forEach(function (item, i) {
                if (item.list) {
                    //单独分类区块内的内容
                    var listNotAll = '';
                    item.list.forEach(function (item) {
                        listNotAll += '<div class="col-md-3 team-gd ">'
                            + '<a href="#portfolioModal' + n + '" class="portfolio-link b-link-diagonal b-animate-go" data-toggle="modal"><img src="' + item.img + '" alt="">'
                            + '</a></div>';

                        listAll += '<div class="col-md-3 team-gd ">'
                            + '<a href="#portfolioModal' + n + '" class="portfolio-link b-link-diagonal b-animate-go" data-toggle="modal"><img src="' + item.img + '" alt="">'
                            + '</a></div>';

                        modalHtml += '<div class="portfolio-modal modal fade slideanim" id="portfolioModal' + n + '" tabindex="-1" role="dialog" aria-hidden="true">'
                            + '<div class="modal-content port-modal">'
                            + '<div class="close-modal" data-dismiss="modal">'
                            + '<div class="lr">'
                            + '<div class="rl"></div>'
                            + '</div>'
                            + '</div>'
                            + '<div class="container">'
                            + '<div class="row">'
                            + '<div class="col-lg-8 col-lg-offset-2 text-center">'
                            + '<div class="modal-body">'
                            + '<h3>' + item.name + '</h3>'
                            + '<a href="'+item.url+'" target="_blank">'
                            + '<img src="' + item.img + '" class="img-responsive img-centered" alt="' + item.name + '">'
                            + '</a>'
                            + '<p>' + item.desc + '</p>'
                            + '</div>'
                            + '</div>'
                            + '</div>'
                            + '</div>'
                            + '</div>'
                            + '</div>';
                        n++;
                    });
                    listNotAll += '<div class="clearfix"></div>';
                    $("#port").find(".resp-tab-content[aria-labelledby='tab_item-" + (i + 1) + "']").html(listNotAll);
                }
            });
            listAll += '<div class="clearfix"></div>';
            $("#port").find(".resp-tab-content[aria-labelledby='tab_item-0']").html(listAll);

            $('body').append(modalHtml);
        }


        //    tab初始化
        $('#horizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true // 100% fit in a container
        });
    })
});
