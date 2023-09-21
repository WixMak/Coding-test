const sortTree = (sortedData, parentMap, root) => {
  const newRoot = [];

  //In case there is an element do not match any parent.
  if (root.length === 0 && parentMap.size !== 0) {
    return "This data went wrong, please check the data input";
  }

  //Use HashMap to get the children by parent(categoryId)
  root.forEach((root) => {
    const children = parentMap.get(root.categoryId) || [];
    children.sort((a, b) => a.categoryId.localeCompare(b.categoryId))

    //If no children, skip adding children props
    if (children.length !== 0) {
      root.children = children;
    }
    newRoot.push(...children);

    //Delete the parent HashMap once updated children
    parentMap.delete(root.categoryId);
  });

  //Recursive if the HashMap still have element
  if (parentMap.size !== 0) {
    return sortTree(sortedData, parentMap, newRoot);
  } else {
    return sortedData;
  }
};

module.exports = { sortTree };
