from conditions import parse_condition
from helpers import parse_id, parse_solution

# Filenames
RULES_FILE = 'regras.csv'
SOLUTIONS_FILE = 'solutions.txt'

def parse_file(filename):
    with open(filename, encoding = 'utf8') as file:
        lines = file.readlines()
        return [line.split(',') for line in lines]

def get_rules():
    return FileStorage.instance().get_rules()

def parse_rules(lines):
    rules = []
    for line in lines:
        id, cond, chance = line
        rules.append((parse_id(id), parse_condition(cond), float(chance)))
    return rules

def parse_solutions():
    solutions = {}
    lines = parse_file(SOLUTIONS_FILE)
    for line in lines:
        id, solution = line
        id, solution = parse_id(id), parse_solution(solution)
        if id in solutions.keys():
            solutions[id].append(solution)
        else:
            solutions[id] = [solution]
    return solutions

class FileStorage:
    _instance = None

    def __init__(self, rules=None):
        self.rules = rules

    def get_rules(self):
        return self.rules

    def set_rules(self, rules):
        self.rules = rules

    def set_rules_from_text(self, data):
        lines = [line.split(',') for line in data.splitlines()]
        self.rules = parse_rules(lines)
        return self.rules

    def set_rules_from_file(self, filename=RULES_FILE):
        lines = parse_file(filename)
        self.rules = parse_rules(lines)
        return self.rules

    @classmethod
    def instance(cls):
        if cls._instance is None:
            cls._instance = cls()
        return cls._instance

# print(parse_solutions())
# print(parse_rules())
