function isEmpty(val) {
    return !(!!val ? typeof val === 'object' ? Array.isArray(val) ? !!val.length : !!Object.keys(val).length : true : false);
}

export default isEmpty;