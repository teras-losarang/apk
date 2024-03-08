import React, { useEffect } from 'react'
import { Animated, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { DefaultStyle } from '../constants/DefaultStyle'
import { Colors } from '../constants/Colors'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const StoreDetailScreen = ({ navigation, route }: any) => {
  const { params } = route

  const AnimatedHeaderValue = new Animated.Value(0)
  const HeaderMaxHeight = 110
  const HeaderMinHeight = 10

  const AnimateBackgroundHeader = AnimatedHeaderValue.interpolate({
    inputRange: [0, HeaderMaxHeight - HeaderMinHeight],
    outputRange: ['transparent', 'white'],
    extrapolate: 'extend'
  })

  const AnimateOpacityImage = AnimatedHeaderValue.interpolate({
    inputRange: [0, HeaderMaxHeight - HeaderMinHeight],
    outputRange: [1, 0],
    extrapolate: 'extend'
  })

  const handleScroll = (event: any) => {
    Animated.event(
      [{ nativeEvent: { contentOffset: { y: AnimatedHeaderValue } } }],
      { useNativeDriver: false }
    )(event);
  }

  return (
    <View style={DefaultStyle.defaultContainer}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
      <Animated.Image source={require('../assets/img/menu/food.png')} style={{ width: '100%', height: 250, resizeMode: 'contain', opacity: AnimateOpacityImage }} />
      <Animated.View style={[DefaultStyle.defaultHeader, { justifyContent: 'space-between', alignItems: 'center', position: 'absolute', top: -20, width: '100%', paddingHorizontal: 16, paddingVertical: 10, backgroundColor: AnimateBackgroundHeader }]}>
        <TouchableOpacity style={{ backgroundColor: Colors.GREY, justifyContent: 'center', alignItems: 'center', paddingLeft: 9, paddingVertical: 4, borderRadius: 50, opacity: .8 }} onPress={() => navigation.goBack()} >
          <MaterialIcons name="arrow-back-ios" size={20} color={Colors.WHITE} style={{ textAlign: 'center' }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: Colors.GREY, justifyContent: 'center', alignItems: 'center', padding: 6, borderRadius: 50, opacity: .8 }} onPress={() => navigation.goBack()}>
          <MaterialIcons name="favorite" size={18} color={Colors.WHITE} />
        </TouchableOpacity>
      </Animated.View>
      <ScrollView scrollEventThrottle={16} onScroll={handleScroll}>
        <View style={[DefaultStyle.defaultPaddingHorizontal, { marginTop: -50 }]}>
          <View style={[DefaultStyle.defaultNeumorphicBox, { gap: 15, padding: 20 }]}>
            <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 20 }}>Me Gacoan</Text>
            <View style={styles.divider}></View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
              <MaterialIcons name="star" size={14} color={Colors.ORANGE} />
              <Text style={{ color: Colors.BLACK, fontSize: 13 }}>4.8 (99+ Penilaian)</Text>
            </View>
            <View style={styles.divider}></View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
              <Image source={require('../assets/img/menu/courier.png')} style={{ width: 14, height: 14 }} />
              <Text style={{ color: Colors.BLACK, fontSize: 13 }}>Tiba dalam 36 Menit</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{ color: Colors.BLACK }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor tortor, condimentum sagittis quam quis, elementum egestas magna. Proin sed nisi ut ante lobortis hendrerit. Donec leo mi, lobortis sit amet justo nec, mollis vestibulum nisi. Praesent ornare nibh sed nulla fringilla feugiat. Vestibulum pretium aliquet aliquet. Nunc non nisl nec sapien rhoncus faucibus. Maecenas tristique dignissim ipsum, tempus accumsan diam. Phasellus eros augue, venenatis ut porta eget, hendrerit sed risus. Donec pharetra viverra posuere. In hac habitasse platea dictumst. Integer et tellus risus.

            Vestibulum nec justo condimentum, sagittis tellus ac, sagittis mi. Ut pellentesque quis eros at eleifend. Donec dictum pharetra odio, a imperdiet mauris molestie non. Nam sit amet iaculis sem. Nunc ornare, tortor non pulvinar maximus, ante nisl sollicitudin dolor, nec accumsan tellus tortor eget odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer congue in ex ut volutpat. Nulla facilisi. Vivamus laoreet in diam non condimentum. Fusce tristique blandit ante, quis porta urna dictum a. Mauris vel massa suscipit, maximus diam non, volutpat nibh. Vivamus sollicitudin felis magna, ut dapibus ex placerat vitae. Vivamus non tincidunt eros. In hac habitasse platea dictumst.

            Curabitur ultricies, ipsum at laoreet fermentum, felis nulla blandit ipsum, quis ultricies ipsum augue maximus tortor. Mauris felis nibh, molestie id tempus eu, iaculis et enim. Curabitur non ipsum vitae massa euismod luctus. Phasellus eu ultrices nisl, in accumsan ex. Sed enim diam, molestie eget congue id, auctor id nibh. Integer tincidunt mi ac quam tristique, ut consectetur felis semper. Nunc nulla purus, lacinia vitae pulvinar ac, posuere quis lectus. Integer ac ex non metus elementum condimentum. Ut semper scelerisque risus, ac vulputate lectus facilisis sed. Aliquam erat volutpat.

            Nunc eget gravida leo. Curabitur tempor et justo tempus cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse purus lacus, elementum sit amet nibh at, malesuada aliquam justo. Suspendisse at suscipit nulla, vel tincidunt turpis. Suspendisse aliquam purus commodo purus molestie, non porta urna euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc fringilla mi sed lacinia rhoncus. Aenean eu dolor augue. Vivamus commodo augue felis, quis elementum quam ultrices quis. Maecenas luctus ante vel aliquam tristique. Cras tincidunt augue eu libero ultrices blandit. Sed condimentum non mi nec luctus.

            Nullam blandit odio eu iaculis convallis. Donec posuere lorem ac justo volutpat aliquet. Nam consectetur at erat ac vehicula. Donec ut libero dapibus, luctus lectus non, rutrum est. Quisque eu enim nec urna laoreet vestibulum non id massa. Sed ante lorem, egestas ac egestas a, fermentum a nisl. Morbi non ipsum non orci egestas molestie at eget nunc.

            Nam id eros ullamcorper, pretium mi rutrum, congue mi. Mauris ut posuere augue. Quisque hendrerit sapien eu velit viverra, ut dictum est elementum. Mauris luctus vehicula lectus at hendrerit. Proin eu fringilla odio. Donec id auctor augue. Nullam eget felis quam. Duis gravida, magna sit amet sagittis tincidunt, mi neque imperdiet nibh, quis congue nibh augue ut justo. Aliquam maximus quam at fringilla finibus.

            Nam libero sem, cursus nec quam eu, ornare sodales neque. Mauris dignissim nisl vel dictum auctor. Duis maximus sollicitudin lorem nec lobortis. Vivamus sit amet ante sit amet erat tempor porttitor ac a velit. Aenean at erat pulvinar, tempor sem quis, imperdiet purus. Mauris consectetur lacinia diam nec eleifend. Fusce mauris neque, bibendum sit amet lacinia eget, hendrerit at eros. Proin vehicula dapibus massa. Cras et tortor eros. Proin viverra vel justo id volutpat.

            Cras ultrices magna orci. Curabitur accumsan libero lorem, tempus porttitor quam vehicula sit amet. Donec porttitor quam ut justo tincidunt, id imperdiet erat vehicula. Sed pellentesque eros et neque facilisis ornare. Nulla facilisi. Nullam facilisis auctor placerat. Curabitur euismod ultricies mattis. Donec congue ex sodales euismod commodo. Etiam molestie vitae orci sed sodales. Donec non iaculis quam. Vivamus in placerat velit, sit amet cursus sapien. Pellentesque pellentesque et erat vitae consectetur. Suspendisse in massa augue. Nulla faucibus nisi id risus luctus sagittis. Nulla facilisi. Proin quis malesuada ligula, sit amet consectetur libero.

            Nulla vitae pellentesque neque. Praesent sapien augue, tincidunt a bibendum ut, imperdiet sit amet erat. Quisque venenatis quam id ullamcorper luctus. Aenean rutrum sed nisl ornare blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum lacinia purus ac velit pretium ultricies. Aenean quis velit at lacus fermentum facilisis sed in erat. Pellentesque auctor velit vitae nulla ornare semper. In vitae ligula vestibulum, lobortis sem non, scelerisque dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce aliquam varius lorem, eget sodales lectus fringilla ut. Donec quis consectetur libero.

            Ut porttitor ut augue non luctus. Pellentesque massa orci, dictum id velit quis, sollicitudin suscipit massa. Pellentesque quis eleifend justo, at egestas leo. Phasellus a vulputate nibh. Nunc sagittis, mauris vel efficitur malesuada, dui sem volutpat lacus, dictum egestas risus lacus id metus. Donec eget ullamcorper enim, ut vehicula risus. Morbi hendrerit id orci et pretium. Ut cursus, est a varius mattis, quam diam molestie mi, vel ornare lectus augue a augue. Sed ornare maximus turpis id finibus. Proin iaculis accumsan diam ac consequat. Aenean quis augue eget felis fringilla pharetra. Nunc consequat lobortis erat, et euismod mauris mattis sit amet. Etiam rutrum convallis ipsum id venenatis. Fusce eget dolor dictum odio elementum condimentum id sit amet massa. In vel nisl lobortis, aliquet mi ac, fringilla arcu. Aenean egestas mattis tellus, vitae mollis leo ultrices ut.

            Sed efficitur vel enim a rutrum. Mauris condimentum sodales aliquet. Duis diam lectus, luctus at diam at, tempor elementum nunc. Sed eget turpis et velit porttitor sagittis. Proin tellus arcu, condimentum mollis purus eu, scelerisque hendrerit purus. Etiam suscipit purus tortor, ac accumsan nibh convallis vitae. Ut sed justo in velit accumsan porta. Maecenas risus massa, egestas et porttitor non, auctor ut lorem. Quisque laoreet libero lorem, eget tristique mi scelerisque sit amet. Fusce tristique, leo a ornare mattis, nunc tellus pharetra turpis, nec pellentesque arcu ligula vitae dui. Duis eget orci tristique, ornare risus vitae, semper tortor. Mauris eget leo ullamcorper, iaculis purus eget, mattis risus. Proin pharetra egestas elit eu vulputate.

            Vestibulum nisl tellus, sagittis nec nulla a, suscipit pellentesque diam. Sed sit amet maximus metus, scelerisque mollis purus. Cras fermentum consectetur dapibus. Cras fermentum neque urna, nec efficitur lacus scelerisque id. Maecenas ut porta nulla. Phasellus facilisis pretium urna, et convallis nisi vestibulum non. In eleifend purus vitae commodo varius. Cras blandit nunc ut ex mollis, vitae egestas leo pharetra. Quisque leo ante, rutrum in sagittis vitae, ultrices in erat. Suspendisse ut sodales sem, vitae consequat dui. Donec diam ipsum, congue at leo a, tempor eleifend velit. Donec a justo interdum libero feugiat rutrum a quis massa. Phasellus eu felis id risus eleifend varius. Integer vestibulum quis arcu eget placerat. Sed vitae pellentesque metus, vel placerat massa. Vestibulum id ante ac mi aliquam pulvinar.

            Nunc vel eleifend augue. Sed ut risus quis ligula vehicula tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec eget placerat lectus, a blandit libero. Sed non ligula magna. Maecenas sit amet malesuada libero, ac sollicitudin ex. Nullam at bibendum ante, eu mollis nunc. Curabitur a erat eu massa condimentum pellentesque sed mollis velit. Maecenas eu tincidunt lorem. Maecenas lacinia lobortis mi, nec pulvinar est gravida molestie. Curabitur lobortis turpis quis finibus sollicitudin. Donec consectetur orci ac pharetra posuere. Aenean condimentum lorem quam, nec condimentum tellus porta gravida. Nulla sit amet condimentum ante.

            Duis eu mauris convallis, vestibulum velit venenatis, aliquam orci. Curabitur leo mi, fermentum id molestie sed, vestibulum nec risus. Integer tincidunt malesuada felis sed tempus. Quisque tristique, erat at feugiat porttitor, massa velit porta nisl, a semper dolor sapien sit amet nisl. Sed eleifend dolor eget libero bibendum blandit. Praesent ornare luctus neque eu condimentum. Phasellus ultrices ipsum ligula, at scelerisque odio ultricies sed. Donec eget augue euismod, luctus risus ac, aliquet leo. Sed sed dui eu nulla condimentum luctus in et tortor.

            Vivamus pharetra nisi vitae arcu fringilla consequat. Integer rhoncus lacus purus, in semper felis semper ut. Pellentesque eleifend suscipit turpis, finibus condimentum neque imperdiet a. Fusce egestas sodales nunc vitae mattis. Donec pellentesque arcu a ipsum gravida, vel commodo dolor eleifend. Donec id enim eleifend, efficitur turpis non, dictum sapien. Donec sed magna elementum, placerat mi id, feugiat libero. Aliquam erat volutpat. Mauris scelerisque augue a nisl lobortis commodo. Aenean vestibulum id tellus vitae dictum. Aliquam erat odio, dignissim pretium convallis non, scelerisque non metus. Proin rutrum, orci non iaculis cursus, tortor ipsum ultricies leo, vitae luctus nisl ante quis lacus. Suspendisse potenti. Integer eget porttitor sapien.

            Phasellus a dolor eu ante condimentum dictum. Fusce a nunc enim. Nullam ullamcorper sodales mollis. Duis accumsan mi at quam pretium accumsan. Aenean in eleifend ex. Etiam rhoncus non orci nec maximus. Maecenas mauris magna, dictum vel gravida vel, convallis sit amet velit. Aliquam quis orci euismod, rutrum dui at, gravida ipsum. Nunc ac libero porttitor, luctus arcu ut, sodales elit. Mauris purus turpis, tincidunt et interdum sit amet, pulvinar ut diam. Ut facilisis est ut leo egestas, a lobortis urna aliquam. Pellentesque id mi vitae sapien placerat volutpat. Duis magna neque, dapibus quis nulla sit amet, mollis facilisis arcu. Suspendisse sed rutrum sapien, et feugiat lacus. Sed mattis a nisi id aliquam. Donec ac efficitur ipsum.

            Nam eu tempus nibh, in cursus leo. Donec sed diam a leo tristique consequat. Quisque risus quam, interdum at porttitor eget, sodales vel nunc. Ut interdum, metus nec pellentesque vulputate, ante mi tristique lorem, at congue sem elit in eros. Nunc elementum pretium justo sed dignissim. Suspendisse sit amet condimentum nisi. Nunc cursus est quis velit scelerisque, sit amet pharetra augue blandit.

            Aliquam ultricies eros volutpat tincidunt congue. Praesent vel finibus urna. Aliquam placerat felis eget mattis condimentum. Aliquam eget lectus ex. Integer magna purus, auctor at lorem at, vulputate scelerisque leo. Phasellus feugiat aliquam sapien, vitae gravida magna imperdiet quis. Sed congue pharetra varius. Nam sit amet imperdiet eros. Fusce venenatis consectetur tellus at cursus. Aliquam eu nibh id sem ultricies elementum. Nam feugiat odio at velit auctor, sit amet aliquet mauris condimentum. Curabitur pulvinar ipsum odio, quis viverra purus ultricies eu. Nunc turpis urna, rutrum at scelerisque id, volutpat at lorem. Sed faucibus mi erat, a commodo dui maximus a. Aliquam erat volutpat.

            Duis at ullamcorper lorem. Ut consectetur dui vitae eleifend pulvinar. Cras sit amet justo vehicula, venenatis ipsum in, pretium elit. Nullam finibus, sem et dignissim faucibus, neque libero vulputate arcu, at dictum neque odio nec urna. Mauris tincidunt odio quis ligula semper, nec lobortis diam ultrices. Sed pulvinar ac sapien quis vehicula. Sed non feugiat urna. Nam ipsum urna, suscipit vel sem at, dapibus tristique enim. Integer ultrices enim a dui faucibus vehicula. Morbi id facilisis ligula, scelerisque congue dui. Donec ac elit vitae velit aliquam eleifend eget non quam. Etiam id congue sapien. Vestibulum eu dui vitae dolor commodo accumsan. Morbi ac faucibus enim, at congue purus. Interdum et malesuada fames ac ante ipsum primis in faucibus.

            Mauris magna augue, bibendum commodo lectus ac, interdum placerat leo. Phasellus eget pretium odio. Cras convallis aliquet ante vitae sodales. Sed vitae odio at magna lacinia dictum. Maecenas eget enim placerat mauris eleifend luctus at vel lacus. Vivamus volutpat blandit ligula vitae vehicula. Etiam et ex tellus. Aliquam aliquet lacinia est. Curabitur efficitur sem ac cursus blandit. Curabitur pulvinar, nulla non scelerisque vulputate, arcu quam mattis eros, eu consectetur nisi nisi vitae mauris. Duis id magna interdum, volutpat tellus ac, lobortis quam. Donec cursus elementum lorem, ac consequat ipsum accumsan a.

            Nullam luctus, ex in consectetur ultrices, est tellus convallis lorem, id pellentesque sem tortor eu nulla. Praesent ultrices ornare tempor. In hac habitasse platea dictumst. Phasellus aliquam vitae turpis a consequat. Praesent vitae leo eleifend, eleifend nunc vitae, efficitur ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec fermentum lectus lorem. Maecenas sem libero, fermentum at urna et, sodales scelerisque nisi. Pellentesque sagittis laoreet diam, nec commodo ex iaculis nec. Vestibulum mollis ipsum massa, sed aliquam eros pretium vel. Etiam cursus risus sit amet elit feugiat sollicitudin. Curabitur eget mauris dolor.

            Aliquam neque elit, porta ac nunc sit amet, sodales tempus metus. Ut tempor velit bibendum purus pulvinar egestas. Praesent ex lectus, consectetur vitae convallis eget, sagittis quis nulla. Fusce lacus elit, viverra eget consectetur id, vehicula sed augue. Cras venenatis a sapien ut tempor. In enim quam, pretium eu ex ut, pellentesque pellentesque velit. Phasellus quis diam massa. Fusce aliquam leo ut diam porta vestibulum. Sed consectetur libero at augue consequat, nec facilisis nibh dignissim. Morbi sodales interdum nisi, ac pharetra turpis laoreet sed. In lacinia orci tellus, ac sodales dolor condimentum nec. Nulla vehicula lacus turpis, ut elementum elit consequat eu. Duis facilisis libero vitae nulla elementum vulputate. Fusce id placerat eros, nec vestibulum massa. Nullam iaculis mi quis tellus fermentum elementum. In hac habitasse platea dictumst.

            Cras vel elit quis lectus mattis varius. Phasellus sed risus porta, semper velit id, ultricies nulla. Vivamus sit amet odio nec felis mattis ornare vel et massa. Suspendisse ut tortor felis. Quisque facilisis tempus nulla commodo cursus. Proin lobortis imperdiet felis, sed tristique felis luctus ac. Nunc non lacus eget sapien varius imperdiet non sit amet purus. Nunc vestibulum enim et enim vehicula ornare. Quisque elementum, mi in gravida aliquam, sem sapien venenatis metus, sed elementum nunc ante eget felis. Sed ullamcorper elit mi, ut dictum nibh convallis finibus. Pellentesque non urna blandit, aliquam libero facilisis, pretium mi. Pellentesque lorem dui, pharetra non pretium facilisis, rutrum vitae nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

            Sed viverra neque quis lorem egestas, quis aliquet justo finibus. Donec finibus eros ut libero egestas ultricies. Maecenas vitae felis massa. Nulla rutrum vehicula odio, id convallis leo mattis non. Nullam lacinia dui sit amet nibh iaculis, non pellentesque dolor semper. Nulla malesuada et ante ac sagittis. Nam ultricies, erat ut ultrices consectetur, magna arcu blandit arcu, et interdum nulla eros at tortor. Suspendisse egestas elementum dolor, vel dictum elit congue et. Fusce vehicula commodo luctus. Duis sollicitudin ex blandit enim fringilla consectetur. Suspendisse commodo eros sit amet pulvinar tristique. Vestibulum tempus ligula vel suscipit mattis. Sed suscipit vitae erat eget dapibus. Donec vehicula eget dui sed porttitor.

            Integer et nunc in nulla fermentum consequat. Curabitur enim lacus, vehicula ut tincidunt non, sagittis non mi. Morbi venenatis eleifend nulla, quis lacinia lorem ullamcorper vel. Donec scelerisque, erat at cursus pretium, dui mi commodo elit, vel pulvinar lorem odio vel quam. Vivamus id nisi consequat, dictum justo sed, ornare leo. Curabitur ultrices placerat nisl, eu sollicitudin metus vestibulum ac. Mauris vitae euismod lorem. Proin vitae felis tellus. Morbi vitae lorem erat.

            Phasellus sit amet eros pharetra, blandit ante egestas, egestas ipsum. Sed vitae eros condimentum, congue leo non, vehicula libero. Pellentesque enim massa, pharetra vel malesuada sit amet, luctus at leo. Quisque at tempor urna, mattis interdum tortor. Ut vel elementum sem. Vestibulum elit sapien, fermentum eget viverra a, ullamcorper eget odio. Vestibulum a facilisis nunc. Mauris vitae dignissim dolor, a gravida tellus. Praesent fermentum augue risus. Duis varius ipsum mauris. Integer a commodo dolor, at facilisis orci. Duis ac libero ex.

            Vestibulum luctus viverra velit, quis interdum nulla lacinia id. Ut orci libero, sodales at mollis quis, scelerisque et diam. Phasellus vitae dui quis tortor volutpat vehicula nec vitae orci. Vestibulum sed lacinia quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas quis ante tortor. Curabitur sodales tortor nec efficitur molestie. Vestibulum mauris nisi, commodo nec ultrices at, sollicitudin vel ipsum.

            Sed at posuere tortor, a eleifend dolor. Fusce turpis orci, tristique eget urna non, convallis consequat nisi. Mauris id varius erat. Cras a consectetur ipsum. Phasellus dapibus enim a mauris pellentesque pellentesque. Etiam finibus in justo porta hendrerit. Nullam accumsan nisl mauris. Pellentesque sed pharetra neque. Cras vel lorem id orci hendrerit convallis in sed odio. Curabitur sodales dictum neque sit amet eleifend. Vestibulum non diam et ex mattis tempus.
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  divider: { height: 2, width: '100%', backgroundColor: Colors.GREY_THIRD },
  card: { flexDirection: 'row', gap: 20, justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 15 },
  cardContent: { justifyContent: 'space-between', flexDirection: 'row', gap: 20 },
  cardImage: { height: 50, width: 50 },
  cardTitle: { color: Colors.BLACK, fontSize: 16, fontWeight: '500' },
})

export default StoreDetailScreen