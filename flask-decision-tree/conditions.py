from helpers import parse_id

# Condição normal
# Ex.: "S sintoma 1"
class Condition:
  def __init__(self, id):
    self.id = id
  def __str__(self):
    return f"\"C {self.id}\""
  def __repr__(self):
    # return f"<Condition {self.id}>"
    return self.id

  # TODO: O valor da condição depende das respostas do usuário
  def value(self):
    return False

# Condição NOT
# Ex.: NOT "S sintoma 1"
class Not:
  def __init__(self, condition):
    self.condition = condition
  def __str__(self):
    return f"NOT {self.condition}"
  def __repr__(self):
    return f"!({repr(self.condition)})"
    # return f"<Not {repr(self.condition)}>"

  # Retorna a negação da condição seguinte
  def value(self):
    return not self.condition.value()

# Condição AND
# Ex.: ("S sintoma 1"; "S sintoma 2")
class And:
  def __init__(self, conditions):
    self.conditions = conditions
  def __str__(self):
    return f"({'; '.join([str(c) for c in self.conditions])})"
  def __repr__(self):
    return ' && '.join([repr(c) for c in self.conditions])
    # return f"<And ({'; '.join([repr(c) for c in self.conditions])})>"

  # Retorna verdadeiro se o valor de todas as condições internas forem verdadeiras
  def value(self):
    return all([c.value() for c in self.conditions])


# Faz o parsing de um texto de uma condição para seu objeto correspondente
def parse_condition(text):
  text = text.strip()
  if text.startswith('(') and text.endswith(')'):
    return And([parse_condition(c) for c in text[1:-1].split(';')])
  if text.startswith('NOT '):
    return Not(parse_condition(text[4:]))

  try:
    id = parse_id(text)
    return Condition(id)
  except Exception:
    # print(text)
    raise Exception('Condição inválida. Uma condição deve ser um NOT, um AND ou um sintoma.')
