// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/56295f5058cac7ae458540423c50ac2dcf9fc711/react/react-addons-css-transition-group.d.ts
declare namespace __React {
    interface CSSTransitionGroupTransitionName {
        enter: string;
        enterActive?: string;
        leave: string;
        leaveActive?: string;
        appear?: string;
        appearActive?: string;
    }

    interface CSSTransitionGroupProps {
        transitionName: string | CSSTransitionGroupTransitionName;
        transitionAppear?: boolean;
        transitionAppearTimeout?: number;
        transitionEnter?: boolean;
        transitionEnterTimeout?: number;
        transitionLeave?: boolean;
        transitionLeaveTimeout?: number;
        component?: string;
    }

    type CSSTransitionGroup = ComponentClass<CSSTransitionGroupProps>;

    namespace __Addons {
        export var CSSTransitionGroup: __React.CSSTransitionGroup;
    }
}

declare module "react-addons-css-transition-group" {
    var CSSTransitionGroup: __React.CSSTransitionGroup;
    type CSSTransitionGroup = __React.CSSTransitionGroup;
    export = CSSTransitionGroup;
}