const Reconciler = require("react-reconciler");

const HostConfig = {
    now: Date.now,
    getRootHostContext: function (nextRootInstance) {
        let rootContext = {}
        return rootContext
    },
    getChildHostContext: function (parentContext, fiberType, rootInstance) {
        let context = { type: fiberType }
        return context
    },
    shouldSetTextContent: function (type, nextProps) {
        return false
    },
    createTextInstance: function (
        newText,
        rootContainerInstance,
        currentHostContext,
        workInProgress
    ) {
        return document.createTextNode(newText)
    },
    createInstance: function (
        type,
        newProps,
        rootContainerInstance,
        currentHostContext,
        workInProgress
    ) {
        const element = document.createElement(type)
        element.className = newProps.className || ''
        element.style = newProps.style

        if (newProps.onClick) {
            element.addEventListener('click', newProps.onClick)
        }
        return element
    },
    appendInitialChild: (parent, child) => {
        parent.appendChild(child)
    },
    finalizeInitialChildren: (
        instance,
        type,
        newProps,
        rootContainerInstance,
        currentHostContext
    ) => {
        return newProps.autofocus
    },
    prepareForCommit: function (rootContainerInstance) { },
    resetAfterCommit: function (rootContainerInstance) { },
    commitMount: (domElement, type, newProps, fiberNode) => {
        domElement.focus()
    },
    appendChildToContainer: (parent, child) => {
        parent.appendChild(child)
    },
    supportsMutation: true,
    prepareUpdate: function (
        instance,
        type,
        oldProps,
        newProps,
        rootContainerInstance,
        currentHostContext
    ) {
        return; 
    },
    commitUpdate: function (
        instance,
        updatePayload,
        type,
        oldProps,
        newProps,
        finishedWork
    ) {
        return; 
    },
    commitTextUpdate: function (textInstance, oldText, newText) {
        textInstance.nodeValue = newText;
    },
}
const reconcilerInstance = Reconciler(HostConfig);

const CustomRenderer = {
    render(element, renderDom, callback) {
        const isAsync = false;
        const container = reconcilerInstance.createContainer(renderDom, isAsync);
        
        const parentComponent = null;
        reconcilerInstance.updateContainer(
            element,
            container,
            parentComponent,
            callback
        );
    }
};

module.exports = CustomRenderer;