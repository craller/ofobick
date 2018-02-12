// pages/index/index.js
Page({   

  /**
   * 页面的初始数据
   */
  data: {
    latitude:45,
    longitude:126
  },
  bindcontroltap:function(e){
     switch(e.controlId){
         case 1:
           this.moveToCenter();
           break;
         case 2:
         if(this.flag){
        wx.navigateBack({
          delta:1
        })
         }else{
           wx.scanCode({
             success: (res) => {
               wx.showLoading({
                 title: '正在获取密码',
               })
               wx.request({
                 url: "https://easy-mock.com/mock/5a7f0180ffb4ef5500a80646/ofo/234#!method=get",
                 success: (res) => {
                   wx.hideLoading()
                   wx.redirectTo({
                     url: '../scancode/scancode?password=' + res.data.data.password + "&number=" + res.data.data.number,
                   })
                 }
               })
             }
           }) 
         }
       break;
       case 3:
       wx.navigateTo({
         url: '../warn/warn',
       });
       break;
       case 5:
       wx.navigateTo({
         url: '../my/my',
       })
       break;
     }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
       this.flag = options.flag;
         wx.getLocation({
           success:(res)=>{
               this.setData({
                  latitude:res.latitude,
                  longitude:res.longitude
               })
           },
         })
         wx.getSystemInfo({
           success:(res)=>{
             console.log(res)
             this.setData({
                controls:[{
                  id:1,
                  iconPath:"/image/location.png",
                   position:{
                     width:50,
                     height:50,
                     left:20,
                     top:res.windowHeight - 80
                   },
                   clickable:true
                }, {
                  id: 2,
                  iconPath: "/image/use.png",
                  position: {
                    width: 80,
                    height: 80,
                    left: res.windowWidth/2 - 50,
                    top: res.windowHeight - 100

                  },
                  clickable: true
                  }, {
                    id: 3,
                    iconPath: "/image/warn.png",
                    position: {
                      width: 50,
                      height: 50,
                      left: res.windowWidth - 70,
                      top: res.windowHeight - 80

                    },
                    clickable: true
                }, {
                  id: 4,
                  iconPath: "/image/marker.png",
                  position: {
                    width: 35,
                    height: 50,
                    left: res.windowWidth/2 - 17,
                    top: res.windowHeight/2-50

                  }
                  }, {
                    id: 5,
                    iconPath: "/image/avatar.png",
                    position: {
                      width: 50,
                      height: 50,
                      left: res.windowWidth-70,
                      top: res.windowHeight - 150

                    },
                    clickable: true
                  }]
             })
           },
         })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
        this.map = wx.createMapContext("ofoMap")
        this.moveToCenter();
  },
  moveToCenter:function(){
         this.map.moveToLocation();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})