package output

import (
	"encoding/json"
	"fmt"
	"strings"
	"sort"
	"math"
)

type NdJson struct {
	URL                   string
	NET_SCORE             float64
	RAMP_UP_SCORE         float64
	CORRECTNESS_SCORE           float64
	BUS_FACTOR_SCORE            float64
	RESPONSIVE_MAINTAINER_SCORE        float64
	LICENSE_SCORE float64
	
}

type ByOverallScore []*NdJson

func (a ByOverallScore) Len() int {
	return len(a)
}

func (a ByOverallScore) Swap(i, j int) {
	a[i], a[j] = a[j], a[i]
}

func (a ByOverallScore) Less(i, j int) bool {
	// Change the sign to < for ascending.
	return a[i].NET_SCORE > a[j].NET_SCORE
}

func (nd *NdJson) DataToNd(_package string, _NET_SCORE float64, _Ramp_up_score float64, _Bus_factor float64, _Responsiveness float64, _Correctness float64, _License_compatability float64) *NdJson {
	nd.URL = _package
	nd.NET_SCORE = math.Round(_NET_SCORE*100)/100
	nd.RAMP_UP_SCORE =  math.Round(_Ramp_up_score*100)/100
	nd.BUS_FACTOR_SCORE =  math.Round(_Bus_factor*100)/100
	nd.RESPONSIVE_MAINTAINER_SCORE =  math.Round(_Responsiveness*100)/100
	nd.LICENSE_SCORE =  math.Round(_License_compatability*100)/100
	nd.CORRECTNESS_SCORE =  math.Round(_Correctness*100)/100

	return nd
}

func FormattedOutput(data []*NdJson) string {
	var jsonStrings []string

	// Sorting in the order for the best score at the top
	sort.Sort(ByOverallScore(data))

	// Loop over the slice of structs and convert each to JSON
	for _, record := range data {
		recordJSON, err := json.Marshal(record)
		if err != nil {
			fmt.Println("Error marshaling struct:", err)
			continue
		}
		jsonStrings = append(jsonStrings, string(recordJSON))
	}

	// Join the JSON strings with a newline character to produce the NDJSON output
	ndjson := strings.Join(jsonStrings, "\n")
	return ndjson
}
