<html>
<head>
    <title>Cards SVG</title>
    <link rel="stylesheet" type="text/css" href="styles.css?<?php echo rand(); ?>" />
    <script src="scripts.js?<?php echo rand(); ?>"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
    <body>
        <svg width="2000" height="20000">
        
            <rect id="background" x="50" y="50" width="1725" height="825"/>
            <rect id="table" x="112.5" y="112.5" width="1600" height="700"/>
            
            <rect id="card1" x="300" y="200" width="280" height="350"/>
            <rect id="card2" x="1250" y="200" width="280" height="350"/>
            <rect id="card3" x="800" y="200" width="280" height="350"/>
            
            <text id="lower" class="card" x="300" y="500">🂡</text>
            <text id="upper" class="card" x="1250" y="500">🂡</text>
            <text id="card" class="card" x="800" y="500">🂡</text>
            
            <text id="title" x="595" y="190">ACEY DEUCEY</text>
            
            <text id="money" x="890" y="700" font-size="50">$50</text>
            
            <g id="buttongroup" onclick="getBounds()">
                <circle id="button" cx="200" cy="700" r="60" stroke="black" stroke-width="5" fill="red" />
                <text id="buttontext" x="165" y="708">Click</text>
                <text id="buttontext" x="125" y="620">Get Bounds</text>
            </g>
            
            <g id="buttongroup2" onclick="getCard()">
                <circle id="button" cx="1625" cy="700" r="60" stroke="black" stroke-width="5" fill="lightblue" />
                <text id="buttontext" x="1590" y="708">Click</text>
                <text id="buttontext" x="1550" y="620">Draw Card</text>
            </g>
            
             <foreignObject x="500" y="700" width="100" height="150">
      <div xmlns="http://www.w3.org/1999/xhtml">
      <input type="text"></input>
          </div>
  </foreignObject>

        </svg>
    </body>
</html>

