import React, { Component } from 'react';
import { Link } from 'react-router';
import Container from 'elements/Container';
class ConsoleBranding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDropdownMenuVisible: false
        };
    }
    toggleDropdownMenu() {
        this.setState({
            isDropdownMenuVisible: !this.state.isDropdownMenuVisible
        });
    }
    render() {
        let username = this.props.username;
        let isAdmin = this.props.isAdmin ? this.props.isAdmin : 'false';
        return (React.createElement("div", {className: "branding console-branding"}, React.createElement(Container, {isFluid: true, className: "clearfix"}, React.createElement("div", null, React.createElement("h1", {className: "logo left"}, React.createElement(Link, {to: "/console"}, "readr"), React.createElement("span", {className: "sep"}, "|"), React.createElement("span", {className: "sub"}, "Console")), username ? (React.createElement("div", {onMouseLeave: this.toggleDropdownMenu.bind(this), onMouseEnter: this.toggleDropdownMenu.bind(this), className: "nav right"}, React.createElement("span", {className: "username"}, username, isAdmin ? (React.createElement("span", {className: "badge-dark"}, "Admin")) : null), this.state.isDropdownMenuVisible ? (React.createElement("ul", {className: "dropdown-menu"}, isAdmin === true ? (React.createElement("li", null, React.createElement("a", {href: "/"}, "Back to readr"))) : null, React.createElement("li", null, React.createElement(Link, {to: `/profile/${username}`}, "我的账号")), React.createElement("li", null, React.createElement("a", {href: '/logout'}, "退出")))) : null)) : (React.createElement("div", {className: "nav right"}, React.createElement("ul", {className: "nav-links"}, React.createElement("li", null, React.createElement(Link, {to: "/signin"}, "登录")), React.createElement("li", null, React.createElement(Link, {to: "/signup"}, "注册")))))))));
    }
}
export default ConsoleBranding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc29sZUJyYW5kaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29yZS9mcm9udGVuZC9jb21wb25lbnRzL0NvbnNvbGVCcmFuZGluZy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFhLE1BQU0sT0FBTztPQUM1QyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWM7T0FFNUIsU0FBUyxNQUFNLG9CQUFvQjtBQUUxQyw4QkFBOEIsU0FBUztJQUVyQyxZQUFZLEtBQUs7UUFDZixNQUFNLEtBQUssQ0FBQyxDQUFBO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLHFCQUFxQixFQUFFLEtBQUs7U0FDN0IsQ0FBQTtJQUNILENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNaLHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUI7U0FDekQsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQTtRQUNsQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBQyxPQUFPLENBQUE7UUFFM0QsTUFBTSxDQUFDLENBQ0wscUJBQUMsR0FBRyxJQUFDLFNBQVMsRUFBQywyQkFBMkIsR0FDeEMsb0JBQUMsU0FBUyxHQUFDLE9BQU8sRUFBRSxJQUFLLEVBQUMsU0FBUyxFQUFDLFVBQVUsR0FDNUMscUJBQUMsR0FBRyxTQUNGLHFCQUFDLEVBQUUsSUFBQyxTQUFTLEVBQUMsV0FBVyxHQUN2QixvQkFBQyxJQUFJLEdBQUMsRUFBRSxFQUFDLFVBQVUsV0FBYSxFQUNoQyxxQkFBQyxJQUFJLElBQUMsU0FBUyxFQUFDLEtBQUssT0FBUyxFQUM5QixxQkFBQyxJQUFJLElBQUMsU0FBUyxFQUFDLEtBQUssYUFBZSxDQUNqQyxFQUVILFFBQVEsR0FBQyxDQUNQLHFCQUFDLEdBQUcsSUFBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUUsRUFBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUUsRUFBQyxTQUFTLEVBQUMsV0FBVyxHQUM1SCxxQkFBQyxJQUFJLElBQUMsU0FBUyxFQUFDLFVBQVUsR0FBRSxRQUFTLEVBQUMsT0FBTyxHQUFDLENBQUMscUJBQUMsSUFBSSxJQUFDLFNBQVMsRUFBQyxZQUFZLFdBQWEsQ0FBQyxHQUFDLElBQUssQ0FBTyxFQUVwRyxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixHQUFDLENBQy9CLHFCQUFDLEVBQUUsSUFBQyxTQUFTLEVBQUMsZUFBZSxHQUV6QixPQUFPLEtBQUssSUFBSSxHQUFDLENBQ2YscUJBQUMsRUFBRSxTQUFDLHFCQUFDLENBQUMsSUFBQyxJQUFJLEVBQUMsR0FBRyxtQkFBa0IsQ0FBSyxDQUN2QyxHQUFDLElBQ0gsRUFDRCxxQkFBQyxFQUFFLFNBQUMsb0JBQUMsSUFBSSxHQUFDLEVBQUUsRUFBRSxZQUFZLFFBQVEsRUFBRyxVQUFZLENBQUssRUFDdEQscUJBQUMsRUFBRSxTQUFDLHFCQUFDLENBQUMsSUFBQyxJQUFJLEVBQUMsU0FBUyxRQUFPLENBQUssQ0FDOUIsQ0FDTixHQUFDLElBQ0gsQ0FDRyxDQUNQLEdBQUMsQ0FDQSxxQkFBQyxHQUFHLElBQUMsU0FBUyxFQUFDLFdBQVcsR0FDeEIscUJBQUMsRUFBRSxJQUFDLFNBQVMsRUFBQyxXQUFXLEdBQ3ZCLHFCQUFDLEVBQUUsU0FDRCxvQkFBQyxJQUFJLEdBQUMsRUFBRSxFQUFDLFNBQVMsUUFBVSxDQUN6QixFQUNMLHFCQUFDLEVBQUUsU0FDRCxvQkFBQyxJQUFJLEdBQUMsRUFBRSxFQUFDLFNBQVMsUUFBVSxDQUN6QixDQUNGLENBQ0QsQ0FFVCxDQUNHLENBQ0ksQ0FDUixDQUNQLENBQUE7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELGVBQWUsZUFBZSxDQUFBIn0=