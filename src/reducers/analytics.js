import { RECEIVED_DATA_SUCCESS, RECEIVING_DATA } from '../actions/analytics';

const defaultState = {
    visits: {},
    performance: {},
    server: {},
    revenue: [],
    mainChart: [],
    isReceiving: false
};

export default function analyticsReducer(state = defaultState, action) {
    switch (action.type) {
        case RECEIVED_DATA_SUCCESS:
            const { visits, performance, server, revenue, mainChart } = action.payload;
            return Object.assign({}, state, {
                visits,
                performance,
                server,
                revenue,
                mainChart,
                isReceiving: false
            });
        case RECEIVING_DATA:
            return Object.assign({}, state, {
                isReceiving: true
            });
        default:
            return state;
    }
}
