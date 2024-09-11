import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
      <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            title: 'overview',
          }}
        />
        <Drawer.Screen
          name="form"
          options={{
            drawerLabel: 'Form',
       headerShown: false
          }}
        />
           <Drawer.Screen
          name="list"
          options={{
            drawerLabel: 'List',
       headerShown: false
          }}
        />
           <Drawer.Screen
          name="nestedui"
          options={{
            drawerLabel: 'Nested Components',
       headerShown: false
          }}
        />
          <Drawer.Screen
          name="+not-found"
          options={{
            drawerItemStyle: { display: "none" }
          }}
        />
      </Drawer>

    </GestureHandlerRootView>
  );
}
