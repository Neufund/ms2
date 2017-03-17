import content from "../content.json";
import {cloneElement} from 'react';

const cms = (filename) => {
    const getString = (string) => {
        if (content[filename] && content[filename][string]) return content[filename][string];
        if (content[string]) return content[string];
        return string;
    };
    const traverseJSXTree = (tree) => {
        if (tree.props.children) {
            if (typeof(tree.props.children) === "string") {
                return cloneElement(tree, {}, getString(tree.props.children));
            } else {
                if (Array.isArray(tree.props.children)) {
                    let newChildren = tree.props.children.map((child)=> {
                        if (typeof(child) === "string") {
                            return getString(child);
                        } else {
                            return traverseJSXTree(child);
                        }
                    });
                    return cloneElement(tree, {}, newChildren);
                }else{
                    let newChild = traverseJSXTree(tree.props.children);
                    return cloneElement(tree, {}, newChild);
                }
            }
        }
        return tree;
    };
    return traverseJSXTree;
};

export default cms;