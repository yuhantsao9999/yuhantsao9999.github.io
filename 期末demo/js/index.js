// 當網頁內容載入至記憶體後執行
$(() => {
    var rand = (start, end) => {
        // 決定範圍
        var n = Math.abs(end - start) + 1

        // 放大 n 倍
        var r = Math.random() * n

        // 去除小數點
        r = Math.floor(r)

        // 做位移
        r = r + ((start <= end) ? start : end)

        return r
    }
    let user = 0
    let deal = 0
    let win_t = 0
    let lose_t = 0
        // 在畫面中產生一張值為 v 的撲克牌
    function dealCard(v, namee) {

        $img = $('<img>').attr('class', 'image').attr('src', './poker/back.png').attr('data-value', v)

        $col = $('<div>').attr('class', 'col').append($img)
        if (namee == "deal") {

            $img.on('click', function() {
                var val = $(this).attr('data-value')
                $(this).attr('src', './poker/pic' + val + '.png')
                user = $img.attr('data-value')
            })
            $('#data').append($col)
        } else if (namee == "checkbig") {
            $img.on('click', function() {
                var val = $(this).attr('data-value')
                $(this).attr('src', './poker/pic' + val + '.png')
                deal = $img.attr('data-value')
                if (user > deal) {
                    win_t += 1
                    $('#wt').html(win_t)
                } else {
                    lose_t += 1
                    $('#lt').html(lose_t)
                }
            })
            $('#match').append($col)
        } else {
            $img.on('click', function() {
                var val = $(this).attr('data-value')
                $(this).attr('src', './poker/pic' + val + '.png')
                deal = $img.attr('data-value')
                if (user < deal) {
                    win_t += 1
                    $('#wt').html(win_t)
                } else {
                    lose_t += 1
                    $('#lt').html(lose_t)
                }

            })
            $('#match').append($col)

        }
        // $('#data').append($col)
        // $('#match').append($col)

    }

    // 發一張牌
    function dealOne(namee) {

        // 產成 52張新的撲克牌 ====================
        var allPoker = []
        for (var i = 1; i <= 52; i++) {
            allPoker.push(i)
        }
        //========================================

        // 洗牌 ==================================
        var n = rand(100, 500)
        for (var i = 0; i < n; i++) {
            var r = rand(0, 51)
            var temp = allPoker[r]
            allPoker[r] = allPoker[0]
            allPoker[0] = temp
        }

        //========================================

        // 將一張牌顯示在畫面上
        for (var i = 0; i < 1; i++) {
            dealCard(allPoker[i], namee)
        }

    }

    // 使用者按下發牌按鈕
    $("#deal").on('click', function() {
        dealOne("deal")
    })

    // 使用者按下比大小按鈕
    $("#checkbig").on('click', function() {
        dealOne("checkbig")
    })

    $("#checksmall").on('click', function() {
        dealOne("checksmall")
    })


    // 使用者按下判斷牌型
    // $('#check').on('click', function() {
    //     // var color = ['梅花', '方塊', '愛心', '黑桃']
    //     var point = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']


    //     // 取得目前撲克牌的值
    //     var poker = []
    //     poker_imglist = $('img.image')

    //     for (let i = 0; i < poker_imglist.length; i++) {
    //         let $img = $(poker_imglist[i]);
    //         let value = $img.attr('data-value')
    //         poker.push(value)
    //     }

    //     // 計算撲克牌的點數和花色
    //     var poker_point = []
    //     var poker_color = []
    //     for (let i = 0; i < poker.length; i++) {
    //         let value = poker[i];
    //         poker_point.push(Math.floor(((value - 1) / 4) + 1))
    //             // poker_color.push((value - 1) % 4)
    //     }

    //     var str = ''
    //     for (let i = 0; i < poker.length; i++) {
    //         // str += color[poker_color[i]]
    //         str += point[poker_point[i]]
    //         str += ' '
    //     }

    // $('#output').val(str)

    // 對點數做排序
    //poker_point.sort();

    // var isStraight = true
    // for (let i = 1; i < poker_point.length; i++) {
    //     if (poker_point[i] - poker_point[i - 1] != 1) {
    //         isStraight = false
    //         break
    //     }
    // }


    // console.dir(poker_point)
    // console.dir(poker_color)
    // })

    $('#data').empty()
})