// pages/warn/warn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bikeInfo:{
      number:0,
      desc:""
    },
    btnType:"defaule",
     checkboxValue:[{
       checked:false,
       value:"私锁私用"
     }, {
       checked: false,
       value: "车牌缺损"
       }, {
         checked: false,
         value: "轮胎坏了"
     }, {
       checked: false,
       value: "车锁坏了"
       }, {
         checked: false,
         value: "违章乱停"
     }, {
       checked: false,
       value: "密码不对"
       }, {
         checked: false,
         value: "刹车坏了"
     }, {
       checked: false,
       value: "其他故障"
       }],
     actionText:"拍射/相册",
     picUrls: [],
     checkbox:[]
  },
  numberInput:function(e){
     
       this.setData({
         bikeInfo:{
           number:e.detail.value,
           desc:this.data.bikeInfo.desc
         }
       })
  },
  bindchange:function(e){
    if(e.detail.value.length){
      this.setData({
        checkbox: e.detail.value,
        btnType:'primary'
      })
    }else{
      this.setData({
        checkbox: e.detail.value,
        btnType: 'default'
      })
    }
     
  },
  submit:function(){
      if(this.data.checkbox.length && this.data.picUrls.length){
          wx.request({
            url: "https://easy-mock.com/mock/5a7f0180ffb4ef5500a80646/ofo/345#!method=get",
            success:(res)=>{
                console.log(res.data)
                wx.showToast({
                  title: '提交成功',
                })
            }
          })
      }else{
        wx.showModal({
          title: '警告',
          content: '请填写信息',
          cancelText:"不填了",
          success:(res)=>{
            if(res.cancel){
              wx.navigateBack({
                  delta:1
              })
            }
          }
        })
      }
  },
  getPics:function(){
    wx.chooseImage({
      success: (res)=>{
         var _picUrls = this.data.picUrls;
         res.tempFilePaths.forEach((item,index)=>{
             _picUrls.push(item)
         })
         this.setData({
           picUrls:_picUrls,
           actionText:"+"
         })
      },
    })
  },
  descInput:function(){
    this.setData({
      bikeInfo: {
        number: this.data.bikeInfo.number,
        desc: e.detail.value
      }
    })
  },
  deletePic:function(e){
        var _picUrls = this.data.picUrls;
        var index = e.target.dataset.index;
        _picUrls.splice(index,1);
        if(_picUrls.length){
          this.setData({
            picUrls: _picUrls
          })
        }else{
          this.setData({
            picUrls: _picUrls,
            actionText:"拍摄/相册"
          })
        }
      
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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