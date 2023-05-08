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
            <div class="row button-row">
                <div class="col-lg-2">
                    <button>
                        <i class="fa-sharp fa-solid fa-hand-back-fist"></i>
                    </button>
                </div>
                <div class="col-lg-2">
                    <button>
                        <i class="fa-solid fa-hand"></i>
                    </button>
                </div>
                <div class="col-lg-2">
                    <button>
                        <i class="fa-solid fa-hand-scissors"></i>
                    </button>
                </div>
            </div>
            <p>Make your choice</p>
            <div class="row scores-row">
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