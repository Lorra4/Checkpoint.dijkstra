function dijkstra(graph, start) {
    // Initialisation des distances avec une valeur infinie pour tous les sommets
    const distances = {};
    for (let vertex in graph) {
      distances[vertex] = Infinity;
    }
  
    // La distance du sommet de départ à lui-même est de 0
    distances[start] = 0;
  
    // Initialisation de l'ensemble des sommets non visités
    const unvisited = new Set(Object.keys(graph));
  
    while (unvisited.size > 0) {
      let currentVertex = null;
  
      // Recherche du sommet non visité avec la plus petite distance
      unvisited.forEach((vertex) => {
        if (currentVertex === null || distances[vertex] < distances[currentVertex]) {
          currentVertex = vertex;
        }
      });
  
      // Retirer le sommet courant de l'ensemble des sommets non visités
      unvisited.delete(currentVertex);
  
      // Parcourir tous les sommets adjacents au sommet courant
      for (let neighbor in graph[currentVertex]) {
        let distance = graph[currentVertex][neighbor];
        let totalDistance = distances[currentVertex] + distance;
  
        // Mettre à jour la distance minimale si une distance plus courte est trouvée
        if (totalDistance < distances[neighbor]) {
          distances[neighbor] = totalDistance;
        }
      }
    }
  
    return distances;
  }
  
  // Exemple d'utilisation
 /* const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
  };
  
  const shortestDistances = dijkstra(graph, 'A'); */
  console.log(shortestDistances);