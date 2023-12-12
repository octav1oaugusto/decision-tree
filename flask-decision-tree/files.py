from conditions import parse_condition
from helpers import parse_id, parse_solution

# Filenames
RULES_FILE = 'regras.csv'
SOLUTIONS_FILE = 'solutions.txt'

def parse_file(filename):
  with open(filename, encoding = 'utf8') as file:
    lines = file.readlines()
    return [line.split(',') for line in lines]

def parse_rules():
  rules = []
  lines = parse_file(RULES_FILE)
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

# print(parse_solutions())
# print(parse_rules())
