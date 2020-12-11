export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: null
    // token: 'BQCVbrv6VlgSL-VsM_ebqUMa6rnS3Tj_xvMZHotZ0SUAXFXbxiVb1e1US1l_xbgDRJ9S2TIBkvt63t9SlN44vgXL1Zm3YuOAMy9wH5aBShJd4l5bOp-YbA54KoX8w03OSuJeA7fMrX_X2PaWyKdUn6owu5rZooaLKySoFxbc4r53ZAiC',
}

const reducer = (state, action) => {
    console.log(action)

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state
    }
}

export default reducer