def get_tree_data():
    tree_data = {
        "id": 1,
        "label": "Root Node",
        "children": [
            {
                "id": 2,
                "label": "Child Node 1",
                "children": [
                    {"id": 4, "label": "Child Node 1.1"},
                    {"id": 5, "label": "Child Node 1.2"},
                ],
            },
            {
                "id": 3,
                "label": "Child Node 2",
                "children": [{"id": 6, "label": "Child Node 2.1"}],
            },
        ],
    }
    return tree_data
