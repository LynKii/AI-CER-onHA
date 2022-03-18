// pages/message/message.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    tel:'',
    sex:''
  },
  changeName:function(e){
    // 当触发changeName的时候给name赋值
    this.setData({
      name:e.detail.value
    })
  },
  changeTel:function(e){
    // 当触发changeTel的时候给tel赋值
    this.setData({
      tel:e.detail.value
    })
  },

  changeSex:function(e){
    // 当触发changeSex的时候给sex赋值
    this.setData({
      sex:e.detail.value
    })
  },

  // 向后台提交完善后的数据
  bindSubmit:function(e){
    // 判断用户输入是否为空
    if(!this.data.name){
      this.openAlert('姓名不能为空')
      return
    } else  if(!this.data.tel){
      this.openAlert('手机号不能为空')
      return
    } else  if(!this.data.sex){
      this.openAlert('性别不能为空')
      return
    }


    wx.request({
      url: 'https://zjgsujiaoxue.applinzi.com/index.php/Api/User/register_by_openid',
      data:{
        openid: wx.getStorageSync('jiaoxue_OPENID'),
        globalData: JSON.stringify(app.globalData.userInfo),
        name:this.data.name,
        tel:this.data.tel,
        sex:this.data.sex
      },
      success:res =>{
        if(res.data.is_register){
          wx.switchTab({
            url: '../user/user',
          })
        }else{
          // this.openAlert(res.data.data)
        }
      },
      fail: res =>{
      },
    })
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