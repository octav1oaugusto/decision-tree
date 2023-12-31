from files import get_rules
from files import parse_solutions as get_solutions
from conditions import Condition

class TreeNode:
    def __init__(self, symptom=None, cause=None, probability=None, left=None, right=None):
        self.symptom = symptom
        self.cause = cause
        self.probability = probability
        self.left = left
        self.right = right
    def __str__(self):
        return self.cause + ' Confiança: ' + str(self.probability)


def build_decision_tree(rules, discarded_symptoms=set()):
    considered_symptoms = set(symptom for _, symptoms, _ in rules for symptom in symptoms)
    if len(discarded_symptoms) >= len(considered_symptoms) or len(rules) == 1:
        return [TreeNode(cause= rule[0], probability=rule[2]) for rule in rules]

    valid_symptoms = considered_symptoms - discarded_symptoms
    best_symptom = max(valid_symptoms, key=lambda x: information_gain(x, rules))

    rules_with_symptom = [rule for rule in rules if best_symptom in rule[1] and best_symptom.not_it() not in rule[1]]
    rules_without_symptom = [rule for rule in rules if best_symptom not in rule[1] or best_symptom.not_it() in rule[1]]

    left_subtree = build_decision_tree(rules_with_symptom, discarded_symptoms.union({best_symptom}))
    # middle_subtree = build_decision_tree(rules,  discarded_symptoms.union({best_symptom})) // pra "n sei" como resposta.
    right_subtree = build_decision_tree(rules_without_symptom, discarded_symptoms)

    return TreeNode(symptom=best_symptom, left=left_subtree, right=right_subtree)


def information_gain(symptom, rules):
    total_prob = sum(rule[2] for rule in rules)
    prob_with_symptom = sum(rule[2] for rule in rules if symptom in rule[1] or symptom.not_it() in rule[1])
    prob_without_symptom = total_prob - prob_with_symptom

    gain = total_prob - (prob_with_symptom * prob_with_symptom) - (prob_without_symptom * prob_without_symptom)

    return gain

def get_leaves(leaves, id):
    ret = []
    for i in range(len(leaves)):
        ret.append({"key" : id, "label" : str(leaves[i])})
    if ret:
        return ret


def tree_data(tree, id= '0'):
    ret = {"key" : id,
            "label" : str(tree.symptom) if tree.left or tree.right else 'Resposta: ',
            #"icon" : questionmark if tree.left or tree.right else exclamationmark
            "children" : [tree_data(tree.left, id+'-0') if type(tree.left) is not list else get_leaves(tree.left, id+'-0'), 
                          tree_data(tree.right, id+'-1') if type(tree.right) is not list else get_leaves(tree.right, id+'-1')]}
    if type(ret["children"][0]) == list:
        ret["children"][0] = ret["children"][0][0]
    if type(ret["children"][1]) == list:
        ret["children"][1] = ret["children"][1][0]
    
    # for i in range(len(ret["children"])):
    #     if ret["children"][i] == None:
    #         ret["children"].pop(i)
    ret["children"] = [child for child in ret["children"] if child is not None]
    return ret

def get_tree_data():
    return [tree_data(build_decision_tree(get_rules()))]

if __name__ == "__main__":
    print([conds[1] for conds in get_rules()])
    # print(get_tree_data())
