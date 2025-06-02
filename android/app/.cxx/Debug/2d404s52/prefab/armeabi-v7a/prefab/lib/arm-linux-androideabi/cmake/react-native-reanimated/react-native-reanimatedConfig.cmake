if(NOT TARGET react-native-reanimated::reanimated)
add_library(react-native-reanimated::reanimated SHARED IMPORTED)
set_target_properties(react-native-reanimated::reanimated PROPERTIES
    IMPORTED_LOCATION "/Users/coeus-jp/Documents/GitHub/Planet-Wealth-Academy-Portal-Mobile-App/node_modules/react-native-reanimated/android/build/intermediates/cxx/Debug/n2d47371/obj/armeabi-v7a/libreanimated.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/coeus-jp/Documents/GitHub/Planet-Wealth-Academy-Portal-Mobile-App/node_modules/react-native-reanimated/android/build/prefab-headers/reanimated"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

if(NOT TARGET react-native-reanimated::worklets)
add_library(react-native-reanimated::worklets SHARED IMPORTED)
set_target_properties(react-native-reanimated::worklets PROPERTIES
    IMPORTED_LOCATION "/Users/coeus-jp/Documents/GitHub/Planet-Wealth-Academy-Portal-Mobile-App/node_modules/react-native-reanimated/android/build/intermediates/cxx/Debug/n2d47371/obj/armeabi-v7a/libworklets.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/coeus-jp/Documents/GitHub/Planet-Wealth-Academy-Portal-Mobile-App/node_modules/react-native-reanimated/android/build/prefab-headers/worklets"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

