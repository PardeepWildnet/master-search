import { API_SUCCESS, 
        PROJECT_DATA, 
        TIMELINE_RESPONSE, 
        SAVE_MILESTONE, 
        UPDATE_MILESTONE, 
        SAVE_MODULE, 
        UPDATEADD_MODULE,
        SAVE_BUILD_TEAM } from '../Actions/action';

const initialState = {
    projectResponse: '',
    projectTimelineResponse: [],
    projectSaveModuleResponse:[],
    projectSaveBuildTeamResponse:[],
}
function Reducers(state = initialState, action) {
    switch (action.type) {
        case API_SUCCESS: {
            return {
                ...state
            }
        }
        case PROJECT_DATA: {
            return {
                ...state,
                projectResponse: action.payload,
            }
        }
        case TIMELINE_RESPONSE: {
            return {
                ...state,
                projectResponse: action.payload,
                projectTimelineResponse: action.payload.data.milestones,
                projectSaveModuleResponse:action.payload.data.data.module,
                projectSaveBuildTeamResponse:action.payload.data.data.team,
            }
        }
        case SAVE_MILESTONE: {
            return {
                ...state,
                projectTimelineResponse: state.projectTimelineResponse.concat(action.payload),
            }
        }
        case UPDATE_MILESTONE: {
            return {
                ...state,
                projectTimelineResponse: action.payload
            }
        };
       case SAVE_MODULE:{
           return{
               ...state,
               projectSaveModuleResponse:action.payload,
           }
       }
        case UPDATEADD_MODULE:{
           return{
               ...state,
               projectSaveModuleResponse:action.payload,
           }
       }
        case SAVE_BUILD_TEAM:{
            return{
                ...state,
                projectSaveBuildTeamResponse:action.payload,
            }
        }
        default: return state;
    }
}

export default Reducers;