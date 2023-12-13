from helpers import parse_id

# Condição normal
# Ex.: "S sintoma 1"
class Condition:
  def __init__(self, id, _not = False):
    self.id = id
    self._not = _not
  def __str__(self):
    return f"{"NOT " if self._not else ""}\"{self.id}\""
  def __eq__(self, other):
    return self.id == other.id and self._not == other._not
  def __ne__(self, other):
    return not (self == other)
  def negated(self):
    return self._not
  def not_it(self):
    return Condition(self.id, not self._not)
  def __hash__(self):
    return hash(str(self) + ('-' if self._not else ''))

# Faz o parsing de um texto de uma condição para seu objeto correspondente
def parse_condition(text):
  text = text.strip()
  if text.startswith('(') and text.endswith(')'):
    return [parse_condition(c) for c in text[1:-1].split(';')]
  if text.startswith('NOT '):
    return Condition(text[4:], True)
  
  try:
    id = parse_id(text)
    return Condition(id)
  except Exception:
    print(text)
    raise Exception('Condição inválida. Uma condição deve ser um NOT, um AND ou um sintoma.')
