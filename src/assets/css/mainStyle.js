import {Dimensions, StyleSheet} from 'react-native';

const {height, width} = Dimensions.get('window');

function hp(givenHeight) {
  return (height * givenHeight) / 100;
}

function wp(givenWeight) {
  return (width * givenWeight) / 100;
}

export const Colors = {
  white: '#ffffff',
  lightGrey: '#dcdcdc',
  black: '#000000',
  errorRed: '#ff3333',
  grey: '#b5b5b5',
  themeBlue: '#24a0ed',
  gold: '#DAA520',
  Coral:'coral'
};

const commonStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  fs6: {
    fontSize: hp(6),
    color: Colors.black,
  },
  fs2: {
    fontSize: hp(2),
  },
  fs109: {
    fontSize: hp(1.9),
  },
  mt5: {
    marginTop: hp(5),
  },
  mt8: {
    marginTop: hp(6),
  },
  fs4: {
    fontSize: hp(4),
  },
  fs3: {
    fontSize: hp(3),
  },
  mt10: {marginTop: hp(10)},
  mt2: {marginTop: hp(2)},
  mt1: {marginTop: hp(1)},
  textInput: {
    width: wp(90),
    height: hp(7),
    backgroundColor: Colors.lightGrey,
    paddingHorizontal: wp(5.5),
    fontSize: hp(2),
    borderColor: Colors.black,
    borderRadius: hp(5),
  },
  errorTxt: {
    fontSize: hp(1.9),
    color: Colors.errorRed,
    marginTop: hp(0.3),
    width: wp(80),
  },
  btn: {
    width: wp(30),
    height: hp(6.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.themeBlue,
    borderRadius: hp(0.5),
  },
  btnTxt: {
    fontSize: hp(2.1),
    fontWeight: 'bold',
    color: Colors.white,
  },

  cardview: {
    width: wp(93),
    backgroundColor: Colors.white,
    marginTop: hp(2),
    borderRadius: hp(3),
    marginBottom: hp(2),
    padding: wp(5),
    justifyContent: 'space-between',
    elevation: 3,
  },
  innerCardView: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: hp(0.3),
  },
  itemImage: {
    height: hp(20),
    width: wp(20),
    resizeMode: 'contain',
  },
  descriptionView: {
    minHeight: hp(15),
    width: wp(58),
    padding: wp(2.5),
  },
  productHeading: {
    fontWeight: 'bold',
    color: Colors.black,
  },
  descriptionText: {
    color: Colors.grey,
  },
  rowView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  price: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    color: Colors.themeBlue,
  },
  rating: {
    color: Colors.black,
    alignSelf: 'flex-end',
  },
  goldRating: {color: Colors.gold, fontWeight: '700'},
  skeltonView: {
  height: hp(25),
  },
  view1:
    {
    flex:0.55,flexDirection:"column",justifyContent:'flex-end',alignItems:'center',
    } ,
    view2:
      {backgroundColor:'white',height: hp(20), width:wp(39),borderRadius:wp(45),elevation:9,opacity:1,justifyContent:'center',alignItems:'center'},
    
      text1:
    {color:'#0276FF',fontWeight:'800',fontSize:hp(6)},

    view3:{flex:0.45,flexDirection:'column',justifyContent:'flex-end',alignContent:'space-around'},

    image1:{
      marginLeft:wp(9),marginBottom:hp(3)
    },

    text2:{left:wp(28),bottom:hp(6),position:'absolute',color:'#FAFAFA',fontSize:hp(2),fontWeight:'800'},
    
    text3:{color:'#FAFAFA',fontSize:hp(2.3),fontWeight:'800',textAlign:'center',marginBottom:hp(3)},

    aview1:{
      flex:1,backgroundColor:"#0276FF"
    },

    aview2:{
      flex:0.49,backgroundColor:"#0276FF",justifyContent:'center',alignItems:'center',flexDirection:'column'
    },

    aimage1:{
      borderRadius:wp(50)
    },

    text4:{
      color:'white',marginTop:10,fontSize:hp(3.3),fontWeight:'800'
    },

    text5:{
      color:'white',marginTop:hp(1.6),fontSize:hp(2.2)
    },

    aview3:
    {flex:0.55,backgroundColor:"#EFF5FF",justifyContent:'flex-start',alignItems:'center',flexDirection:'column',borderTopLeftRadius:wp(9),borderTopRightRadius:wp(9)},
     
    to1:
    {height:hp(7.99),width:wp(84),backgroundColor:'#FFFFFF',borderRadius:wp(2),marginTop:hp(5),alignItems:'center',flexDirection:'row'},
    
    atext1:{
      textAlign:'center',fontWeight:'700',fontSize:hp(2.8),color:'#000000',marginTop:0,marginLeft:wp(26)
    },

    aimage:{marginLeft:wp(20),marginBottom:0},


      to2:
      {height:hp(7.99),width:wp(84),backgroundColor:'#FFFFFF',borderRadius:wp(2),marginTop:hp(3.5),elevation:0.5},

      ti1:
        {textAlign:'center',fontWeight:'600',fontSize:hp(2.1)},

      to3:{height:hp(7.99),width:wp(84),backgroundColor:'coral',borderRadius:wp(2),marginTop:hp(4.1)},


      text6:{fontSize:hp(2.3),fontWeight:'800',color:'#FFFFFF',textAlign:'center',marginTop:hp(2.5)},
      

      ls4:
      { marginLeft:wp(12),
      },

      ls4common:
      {
        height:hp(7.5),width:wp(14.5),borderRadius:wp(2),backgroundColor:'#FFFFFF',marginTop:hp(7),elevation:1
      },

      marginlefts:
      {
         marginLeft:wp(5)
      },

      ls5:{
        marginLeft:wp(5),
        marginRight:wp(12)
      },

      textcommon:{
        color:'white',marginTop:hp(2),fontWeight:'800',fontFamily:'Nunito_800ExtraBold'
      },

    fontsize1:{
      fontSize:hp(2.9)
    },

    fontSize2:{
      fontSize:hp(1.9)
    },

    bd80:{
      borderRadius:wp(45)
    },

    crabtext:{
      fontSize:hp(3),
      fontWeight:'bold',
      color:'black',
    },
    padding1:{
      paddingTop:hp(3)
    },
    reate:{
      height:hp(21),
      width:wp(84),
      backgroundColor:'#FFFFFF',
      marginTop:hp(3.5),
      borderRadius:wp(2),
      elevation:0.5
    },
    crabtext2:{
      textAlign:'center',
      marginTop:hp(2.3)
    },
    style1:
    {flex:1,
    backgroundColor:"#0276FF"},

    style2:{flex:0.16,
    backgroundColor:"#0276FF"},

    style3:
    {textAlign:'center',
    marginTop:hp(2.2),
    fontSize:hp(4),
    color:'#FFFFFF'},

    style4:
    {flex:1.5,
    backgroundColor:'#F3F8FF',
    borderTopLeftRadius:wp(9),
    borderTopRightRadius:wp(9),
    flexDirection:'column',
    alignItems:'center'},

    style5:
    {alignContent:'center',
    alignItems:'center'},

    style6:
    {height:hp(1),
    width:wp(84),
    marginBottom:hp(4),
    marginTop:hp(1.8),
    elevation:0.5,
    borderColor:'white'},

    textstyles:{
      fontWeight:'bold'
    },

    textstyles1:
    {
      textAlign:'center',
      fontSize: hp(2.3)
    }

});

export default commonStyle;
