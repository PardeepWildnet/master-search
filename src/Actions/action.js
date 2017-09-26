export const API_SUCCESS = 'API_SUCCESS';
export const PROJECT_DATA = 'PROJECT_DATA';
export const TIMELINE_RESPONSE='TIMELINE_RESPONSE';
export const SAVE_MILESTONE='SAVE_MILESTONE';
export const UPDATE_MILESTONE='UPDATE_MILESTONE';
export const SAVE_MODULE='SAVE_MODULE';
export const UPDATEADD_MODULE='UPDATEADD_MODULE';
export const SAVE_BUILD_TEAM='SAVE_BUILD_TEAM';

export function apiSuccess() {
    return {
        type: API_SUCCESS
    }
}
export function projectData(data){
    return{
        type: PROJECT_DATA,
        payload: data
    }
}

export function projectTimelineResponse(data){
    return{
        type:TIMELINE_RESPONSE,
        payload:data,
    }
}
export function saveMilestoneForm(data){
    return{
        type:SAVE_MILESTONE,
        payload:data,
    }
}
export function updateMilestoneForm(data){
    return{
        type:UPDATE_MILESTONE,
        payload:data,
    }
}
export function saveModuleResponse(data){
    return{
        type:SAVE_MODULE,
        payload:data,
    }
}
export function updateAddModuleData(data){
    return{
        type:UPDATEADD_MODULE,
        payload:data,
    }
}
export function saveBuildTeamData(data){
    return{
        type:SAVE_BUILD_TEAM,
        payload:data,
    }
}
