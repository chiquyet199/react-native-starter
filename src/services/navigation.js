import { Navigation } from 'react-native-navigation'
import routes from 'configs/routes'

import lang from 'lang'
import { Colors, Fonts } from 'styles'

const navigate = () => {
  Navigation.push('TEST', {
    component: {
      name: routes.About,
    },
  })
}

const openLandingPage = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: routes.Welcome,
              options: {
                topBar: {
                  visible: false,
                  height: 0,
                },
              },
            },
          },
        ],
      },
    },
  })
}

const openMainPage = () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: routes.SideMenu,
            passProps: {
              side: 'left',
            },
          },
        },
        center: {
          bottomTabs: {
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: routes.DashBoard,
                        options: {
                          topBar: {
                            visible: false,
                            height: 0,
                          },
                        },
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      title: lang.home,
                      icon: require('assets/images/ico-home.png'),
                    },
                    topBar: {
                      visible: true,
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: routes.About,
                        passProps: {
                          text: 'This is tab 1',
                          myFunction: () => 'Hello from a function!',
                        },
                        options: {
                          topBar: {
                            visible: true,
                            title: {
                              text: 'React Native Navigation!',
                            },
                          },
                        },
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      title: 'Basket',
                      icon: require('assets/images/ico-basket.png'),
                    },
                    topBar: {
                      visible: true,
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: routes.About,
                        passProps: {
                          text: 'This is tab 1',
                          myFunction: () => 'Hello from a function!',
                        },
                        options: {
                          topBar: {
                            visible: true,
                            title: {
                              text: 'React Native Navigation!',
                            },
                          },
                        },
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      title: 'Wishlist',
                      icon: require('assets/images/ico-wishlist.png'),
                    },
                    topBar: {
                      visible: true,
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: routes.About,
                        passProps: {
                          text: 'This is tab 2',
                        },
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      title: 'Write a review',
                      icon: require('assets/images/ico-write-review.png'),
                    },
                  },
                },
              },
            ],
            options: {
              bottomTabs: {
                tabColor: Colors.black,
                titleDisplayMode: 'alwaysShow',
                selectedTabColor: Colors.orange,
                fontFamily: 'NunitoSans-Light',
                fontSize: Fonts.text,
              },
            },
          },
        },
      },
    },
  })
}

const openSideMenu = componentId => {
  Navigation.mergeOptions(componentId, {
    sideMenu: {
      left: {
        visible: true,
        enable: true,
      },
    },
  })
}

export { navigate, openSideMenu, openMainPage, openLandingPage }
