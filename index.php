<!DOCTYPE html>
<html lang="fr">
    <head>
        <?php include 'layout/head.phtml'; ?>
    </head>

    <body>

    <header>
            <?php include 'layout/header.phtml'; ?>
    </header>

    <main>
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <button>
                        <img src="images/rock.png" alt="rock">
                    </button>
                </div>
                <div class="col-lg-4">
                    <button>
                        <img src="images/paper.png" alt="paper">
                    </button>
                </div>
                <div class="col-lg-4">
                    <button>
                        <img src="images/scissors.png" alt="scissors">
                    </button>
                </div>
            </div>
            <p>Make your choice</p>
            <div class="row">
                <div class="col-lg-12">
                    <h2>Scores : </h2>
                </div>
                <div class="col-lg-6">
                    <p>You :</p>
                    <div id="score-number-you">
                        <p>0</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <p>Computer :</p>
                    <div id="score-number-computer">
                        <p>0</p>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer>
        <?php include 'layout/footer.phtml'; ?>
    </footer>

    <script type="text/javascript" src="scripts/main.js"></script>
    </body>