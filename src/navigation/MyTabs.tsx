import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/Home';
import SettingScreen from '@screens/Setting';
import React from 'react';

const BottomTab = createBottomTabNavigator();

const tabs = [
  { name: 'Home', component: HomeScreen, icon: 'home-outline' },
  { name: 'Home', component: SettingScreen, icon: 'home-outline' },
];

const MyTabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        // tabBarIcon: ({ color, size }) => {
        //   const tab = tabs.find(tab => tab.name === route.name);
        //   if (!tab) {
        //     throw new Error(`Tab with name ${route.name} not found`);
        //   }
        //   return <Icon name={tab?.icon} size={size} color={color} />;
        // },
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#f5f5f5',
        },
      })}
    >
      {tabs.map((tab, index) => (
        <BottomTab.Screen
          key={index}
          name={tab.name}
          component={tab.component}
        />
      ))}
    </BottomTab.Navigator>
  );
};

export default MyTabs;
