import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const WINDOW_WIDTH = Dimensions.get('window').width
export const WINDOW_HEIGHT = Dimensions.get('window').height

export const DefaultStyle = StyleSheet.create({
  defaultContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  defaultPaddingHorizontal: {
    paddingHorizontal: 20
  },
  defaultHeader: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 20
  },
  defaultHeaderTitle: {
    color: Colors.BLUE_PRIMARY,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500'
  },
  defaultInputContainer: {
    backgroundColor: Colors.WHITE,
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.GREY,
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 10,
    justifyContent: 'center',
    marginBottom: 10
  },
  defaultInputContent: {
    fontSize: 13,
    color: Colors.GREY
  },
  defaultBottomHeight: {
    height: 90
  },
  defaultNeumorphicBox: {
    backgroundColor: Colors.WHITE,
    borderRadius: 16,
    shadowColor: Colors.GREY,
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 10,
    padding: 10,
  },
  defaultBtnPrimary: {
    borderWidth: 1,
    borderColor: Colors.BLUE_PRIMARY,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.BLUE_PRIMARY
  },
  defaultBtnOutlinePrimary: {
    borderWidth: 1,
    borderColor: Colors.BLUE_PRIMARY,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.WHITE
  },
  defaultBtnOutlineSecondary: {
    borderWidth: 1,
    borderColor: Colors.GREY_THIRD,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: Colors.WHITE
  }
})