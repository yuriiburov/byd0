const favorites = ['id-6', 'id-17'];

const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [
        {
          id: 'id-6',
          name: 'Drinks',
          nodes: [],
        },
      ],
    },
    {
      id: 'id-17',
      name: 'Vehicles',
      nodes: [],
    },
  ],
};

/**
 *
 * @param {object} obj
 * @param {array} favoriteValues
 * @returns object
 */
export const markFavorites = (obj, favoriteValues) => {
  const isFavorite = favoriteValues.includes(obj.id);

  return {
    ...obj,
    isFavorite,
    nodes: obj.nodes.map((childNode) => markFavorites(childNode, favorites)),
  };
};

console.log(markFavorites(tree, favorites));
