from files import parse_rules as get_rules
from files import parse_solutions as get_solutions
from conditions import Condition, Not, And 

class TreeNode:
    def __init__(self, symptom=None, cause=None, probability=None, left=None, right=None):
        self.symptom = symptom
        self.cause = cause
        self.probability = probability
        self.left = left
        self.right = right


def build_decision_tree(rules, discarded_symptoms=None):
    if discarded_symptoms is None:
        discarded_symptoms = set()

    if not rules or len(discarded_symptoms) == len(set(symptom for _, symptoms, _ in rules for symptom in symptoms)):
        return None

    valid_symptoms = set(symptom for _, symptoms, _ in rules for symptom in symptoms) - discarded_symptoms
    best_symptom = max(valid_symptoms, key=lambda x: information_gain(x, rules))

    rules_with_symptom = [rule for rule in rules if best_symptom in rule[1]]
    rules_without_symptom = [rule for rule in rules if best_symptom not in rule[1]]

    left_subtree = build_decision_tree(rules_with_symptom, discarded_symptoms.union({best_symptom}))
    right_subtree = build_decision_tree(rules_without_symptom, discarded_symptoms)

    return TreeNode(symptom=best_symptom, left=left_subtree, right=right_subtree)


def information_gain(symptom, rules):
    total_prob = sum(rule[2] for rule in rules)
    prob_with_symptom = sum(rule[2] for rule in rules if symptom in rule[1])
    prob_without_symptom = total_prob - prob_with_symptom

    gain = total_prob - (prob_with_symptom * prob_with_symptom) - (prob_without_symptom * prob_without_symptom)

    return gain


def print_tree(node, depth=0):
    if node is not None:
        print("  " * depth, end="")
        if node.symptom is not None:
            print(f"{node.symptom}?")
        if node.cause is not None:
            print(f"  --> {node.cause} ({node.probability:.2f})")
        print_tree(node.left, depth + 1)
        print_tree(node.right, depth + 1)


#parse_rules() : [("Causa", [Condition("cond", not:bool)], 0.55f)]
rules = [
    ("C 2-SAT", ["And"], 0.55),
    ("C Binary Lifting",["-Lowest Common Ancestor"],0.42),
    ("C Catalan Numbers",["Modular Operations"],0.66),
]

decision_tree = build_decision_tree(rules)
print_tree(decision_tree)
