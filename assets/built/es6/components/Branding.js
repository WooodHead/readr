import React, { Component } from 'react';
import { Link } from 'react-router';
import Container from 'elements/Container';
class Branding extends Component {
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
        let isAdmin = this.props.isAdmin ? this.props.isAdmin : false;
        return (React.createElement("div", {className: "branding"}, React.createElement(Container, {className: "clearfix"}, React.createElement("div", null, React.createElement("h1", {className: "logo left"}, React.createElement(Link, {to: "/"}, "readr")), React.createElement("div", {className: "nav left"}, React.createElement("ul", {className: "nav-links"}, React.createElement("li", null, React.createElement(Link, {to: "/browse"}, "浏览")), React.createElement("li", null, React.createElement(Link, {to: "/collections"}, "书单")))), username ? (React.createElement("div", {onMouseLeave: this.toggleDropdownMenu.bind(this), onMouseEnter: this.toggleDropdownMenu.bind(this), className: "nav right"}, React.createElement("span", {className: "recent-reading"}, "最近阅读"), React.createElement("span", {className: "username"}, username, isAdmin ? (React.createElement("span", {className: "badge-dark"}, "Admin")) : null), this.state.isDropdownMenuVisible ? (React.createElement("ul", {onClick: this.toggleDropdownMenu.bind(this), className: "dropdown-menu"}, isAdmin === true ? (React.createElement("li", null, React.createElement("a", {href: "/console"}, "控制台"))) : null, React.createElement("li", null, React.createElement(Link, {to: `/shelf`}, "书架")), React.createElement("li", null, React.createElement(Link, {to: `/profile`}, "个人主页")), React.createElement("li", null, React.createElement(Link, {to: `/settings`}, "设置")), React.createElement("li", null, React.createElement("a", {href: '/logout'}, "退出")))) : null)) : (React.createElement("div", {className: "nav right"}, React.createElement("ul", {className: "nav-links"}, React.createElement("li", null, React.createElement(Link, {to: "/signin"}, "登录")), React.createElement("li", null, React.createElement(Link, {to: "/signup"}, "注册")))))))));
    }
}
export default Branding;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJhbmRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb3JlL2Zyb250ZW5kL2NvbXBvbmVudHMvQnJhbmRpbmcudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBYSxNQUFNLE9BQU87T0FDNUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxjQUFjO09BRTVCLFNBQVMsTUFBTSxvQkFBb0I7QUFFMUMsdUJBQXVCLFNBQVM7SUFFOUIsWUFBWSxLQUFLO1FBQ2YsTUFBTSxLQUFLLENBQUMsQ0FBQTtRQUNaLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxxQkFBcUIsRUFBRSxLQUFLO1NBQzdCLENBQUE7SUFDSCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDWixxQkFBcUIsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCO1NBQ3pELENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUE7UUFDbEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUMsS0FBSyxDQUFBO1FBRXpELE1BQU0sQ0FBQyxDQUNMLHFCQUFDLEdBQUcsSUFBQyxTQUFTLEVBQUMsVUFBVSxHQUN2QixvQkFBQyxTQUFTLEdBQUMsU0FBUyxFQUFDLFVBQVUsR0FDN0IscUJBQUMsR0FBRyxTQUNGLHFCQUFDLEVBQUUsSUFBQyxTQUFTLEVBQUMsV0FBVyxHQUN2QixvQkFBQyxJQUFJLEdBQUMsRUFBRSxFQUFDLEdBQUcsV0FBYSxDQUN0QixFQUNMLHFCQUFDLEdBQUcsSUFBQyxTQUFTLEVBQUMsVUFBVSxHQUN2QixxQkFBQyxFQUFFLElBQUMsU0FBUyxFQUFDLFdBQVcsR0FDdkIscUJBQUMsRUFBRSxTQUNELG9CQUFDLElBQUksR0FBQyxFQUFFLEVBQUMsU0FBUyxRQUFVLENBQ3pCLEVBQ0wscUJBQUMsRUFBRSxTQUNELG9CQUFDLElBQUksR0FBQyxFQUFFLEVBQUMsY0FBYyxRQUFVLENBQzlCLENBQ0YsQ0FDRCxFQUVKLFFBQVEsR0FBQyxDQUNQLHFCQUFDLEdBQUcsSUFBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUUsRUFBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUUsRUFBQyxTQUFTLEVBQUMsV0FBVyxHQUM1SCxxQkFBQyxJQUFJLElBQUMsU0FBUyxFQUFDLGdCQUFnQixVQUFZLEVBQzVDLHFCQUFDLElBQUksSUFBQyxTQUFTLEVBQUMsVUFBVSxHQUFFLFFBQVMsRUFBQyxPQUFPLEdBQUMsQ0FBQyxxQkFBQyxJQUFJLElBQUMsU0FBUyxFQUFDLFlBQVksV0FBYSxDQUFDLEdBQUMsSUFBSyxDQUFPLEVBRXBHLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLEdBQUMsQ0FDL0IscUJBQUMsRUFBRSxJQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxFQUFDLFNBQVMsRUFBQyxlQUFlLEdBRXRFLE9BQU8sS0FBSyxJQUFJLEdBQUMsQ0FDZixxQkFBQyxFQUFFLFNBQUMscUJBQUMsQ0FBQyxJQUFDLElBQUksRUFBQyxVQUFVLFNBQVEsQ0FBSyxDQUNwQyxHQUFDLElBQ0gsRUFFRCxxQkFBQyxFQUFFLFNBQUMsb0JBQUMsSUFBSSxHQUFDLEVBQUUsRUFBRSxRQUFTLFFBQVUsQ0FBSyxFQUN0QyxxQkFBQyxFQUFFLFNBQUMsb0JBQUMsSUFBSSxHQUFDLEVBQUUsRUFBRSxVQUFXLFVBQVksQ0FBSyxFQUMxQyxxQkFBQyxFQUFFLFNBQUMsb0JBQUMsSUFBSSxHQUFDLEVBQUUsRUFBRSxXQUFZLFFBQVUsQ0FBSyxFQUN6QyxxQkFBQyxFQUFFLFNBQUMscUJBQUMsQ0FBQyxJQUFDLElBQUksRUFBQyxTQUFTLFFBQU8sQ0FBSyxDQUM5QixDQUNOLEdBQUMsSUFDSCxDQUNHLENBQ1AsR0FBQyxDQUNBLHFCQUFDLEdBQUcsSUFBQyxTQUFTLEVBQUMsV0FBVyxHQUN4QixxQkFBQyxFQUFFLElBQUMsU0FBUyxFQUFDLFdBQVcsR0FDdkIscUJBQUMsRUFBRSxTQUNELG9CQUFDLElBQUksR0FBQyxFQUFFLEVBQUMsU0FBUyxRQUFVLENBQ3pCLEVBQ0wscUJBQUMsRUFBRSxTQUNELG9CQUFDLElBQUksR0FBQyxFQUFFLEVBQUMsU0FBUyxRQUFVLENBQ3pCLENBQ0YsQ0FDRCxDQUVULENBQ0csQ0FDSSxDQUNSLENBQ1AsQ0FBQTtJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsZUFBZSxRQUFRLENBQUEifQ==