import { GenericRoute } from '../types/portal-config'
import { publications, files, datasets, grants, studies, tools } from './synapseConfigs'
import { SynapseConstants } from 'synapse-react-client'
import { studiesSql, studySchema } from './synapseConfigs/studies'
import { facetAliases } from './synapseConfigs/commonProps'
import { publicationSql, publicationSchema } from './synapseConfigs/publications'
import { datasetsSql, datasetSchema } from './synapseConfigs/datasets'
import routeButtonControlWrapperProps from './routeButtonControlWrapperProps'
import loadingScreen from './loadingScreen'
import { toolsSchema, toolsSql } from './synapseConfigs/tools'

const homeLimit = 3

const routes: GenericRoute [] = [
  {
    name: 'Home',
    to: '/',
    isNested: false,
    synapseConfigArray: [
      {
        name: 'StatefulButtonControlWrapper',
        title: 'EXPLORE PORTAL',
        props: {
          colors: [
            '#47337D',
            '#407BA0',
            '#7798AC',
            '#77BBBF',
            '#58A158',
            '#3C4A63',
          ],
          configs: [
            { name: 'Grants', synapseConfigArray: [grants.homePageSynapseObject] },
            { name: 'Publications', synapseConfigArray: [publications.homePageSynapseObject] },
            { name: 'Studies', synapseConfigArray: [studies.homePageSynapseObject] },
            { name: 'Datasets', synapseConfigArray: [datasets.homePageSynapseObject] },
            { name: 'Files', synapseConfigArray: [files.homePageSynapseObject] },
            { name: 'Tools', synapseConfigArray: [tools.homePageSynapseObject] },
          ]
        }
      },
      {
        name: 'CardContainerLogic',
        title: 'EXPLORE STUDIES',
        link: 'Explore/Studies',
        props: {
          loadingScreen,
          facetAliases,
          sql: studiesSql,
          limit: homeLimit,
          type: SynapseConstants.GENERIC_CARD,
          genericCardSchema: studySchema
        }
      },
      {
        name: 'CardContainerLogic',
        title: 'EXPLORE PUBLICATIONS',
        link: 'Explore/Publications',
        props: {
          loadingScreen,
          facetAliases,
          sql: publicationSql,
          limit: homeLimit,
          type: SynapseConstants.GENERIC_CARD,
          genericCardSchema: publicationSchema
        },
      },
      {
        name: 'CardContainerLogic',
        title: 'EXPLORE DATASETS',
        link: 'Explore/Datasets',
        props: {
          loadingScreen,
          facetAliases,
          sql: datasetsSql,
          limit: homeLimit,
          type: SynapseConstants.GENERIC_CARD,
          genericCardSchema: datasetSchema
        },
      },
      {
        name: 'CardContainerLogic',
        title: 'EXPLORE TOOLS',
        link: 'Explore/Tools',
        props: {
          loadingScreen,
          facetAliases,
          sql: toolsSql,
          limit: homeLimit,
          type: SynapseConstants.GENERIC_CARD,
          genericCardSchema: toolsSchema
        },
      },
    ]
  },
  {
    name: 'Explore',
    isNested: true,
    routes: [
      {
        name: 'Grants',
        to: '/Explore/Grants',
        isNested: false,
        synapseConfigArray: [
          {
            ...routeButtonControlWrapperProps,
            props: {
              ...routeButtonControlWrapperProps.props,
              synapseConfig: grants.explorePageSynapseObject
            }
          }
        ],
      },
      {
        name: 'Publications',
        to: '/Explore/Publications',
        isNested: false,
        synapseConfigArray: [
          {
            ...routeButtonControlWrapperProps,
            props: {
              ...routeButtonControlWrapperProps.props,
              synapseConfig: publications.explorePageSynapseObject
            }
          }
        ],
      },
      {
        name: 'Studies',
        to: '/Explore/Studies',
        isNested: false,
        synapseConfigArray: [
          {
            ...routeButtonControlWrapperProps,
            props: {
              ...routeButtonControlWrapperProps.props,
              synapseConfig: studies.explorePageSynapseObject
            }
          }
        ],
      },
      {
        name: 'Datasets',
        to: '/Explore/Datasets',
        isNested: false,
        synapseConfigArray: [
          {
            ...routeButtonControlWrapperProps,
            props: {
              ...routeButtonControlWrapperProps.props,
              synapseConfig: datasets.explorePageSynapseObject
            }
          }
        ],
      },
      {
        name: 'Files',
        to: '/Explore/Files',
        isNested: false,
        synapseConfigArray: [
          {
            ...routeButtonControlWrapperProps,
            props: {
              ...routeButtonControlWrapperProps.props,
              synapseConfig: files.explorePageSynapseObject
            }
          }
        ],
      },
      {
        name: 'Tools',
        to: '/Explore/Tools',
        isNested: false,
        synapseConfigArray: [
          {
            ...routeButtonControlWrapperProps,
            props: {
              ...routeButtonControlWrapperProps.props,
              synapseConfig: tools.explorePageSynapseObject
            }
          }
        ],
      }
    ]
  },
  {
    name: 'About',
    to: '/About',
    isNested: false,
    synapseConfigArray: [
      {
        name: 'Markdown',
        props: {
          ownerId: 'syn7080714',
          wikiId: '470467'
        }
      }
    ]
  }
]

export default routes
