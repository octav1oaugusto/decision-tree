from files import parse_rules as get_rules
from files import parse_solutions as get_solutions
from conditions import Condition, Not, And 

rules = get_rules()
solutions = get_solutions()


#eu sei que tem coisa mais bonita e mais robusta
#mas o semestre nao me permitiu saude pra implementar
symptom_cause = {}
for rule in rules:
    cause, chance = rule[0], rule[2]
    if type(rule[1]) == Not: midsection = rule[1].condition
    else: midsection = rule[1]
    if type(midsection) == And:
        for s in midsection.conditions:
            if type(s) is Not: symptom = s.condition
            else: symptom = s
            if symptom not in symptom_cause.keys():
                symptom_cause[symptom] = {cause : chance}
            else:
                symptom_cause[symptom][cause] = max(chance, symptom_cause[symptom].get(cause, 0))
    else:
        if symptom not in symptom_cause.keys():
            symptom_cause[symptom] = {cause : chance}
        else:
            symptom_cause[symptom][cause] = max(chance, symptom_cause[symptom].get(cause, 0))

for i in symptom_cause.items():
    print(i)
